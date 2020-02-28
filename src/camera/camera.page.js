// src/camera.page.js file
import React from 'react';
import { View, Text } from 'react-native';
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera';
import Toolbar from './toolbar.component';
import Gallery from './gallery.component';
import { RNS3 } from 'react-native-s3-upload';

import styles from './styles';

export class CameraPage extends React.Component {
    camera = null;
    state = {
        captures: [],
        // setting flash to be turned off by default
        flashMode: Camera.Constants.FlashMode.off,
        capturing: null,
        // start the back camera by default
        cameraType: Camera.Constants.Type.back,
        hasCameraPermission: null,
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    handleCaptureOut = () => {
        if (this.state.capturing)
            this.camera.stopRecording();
    };

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
        console.log(photoData);

        const { uri: ph_uri } = photoData
        console.log(ph_uri);
        const file = {
            uri: ph_uri,
            name: "image.jpg",
            type: "image/jpg"
        }
        const options = {
            keyPrefix: "images/",
            bucket: "hypertest1",
            region: "us-east-1",
            accessKey: "AKIASTVOZVVX43VXVB4S",
            secretKey: "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",
            successActionStatus: 201
          }
          console.log('file!')
        console.log(file);
        RNS3.put(file, options).progress((e) => console.log(e.loaded / e.total))
        .then(response => {
            console.log(response);

            console.log('upload?')
            if (response.status !== 201)
            throw new Error("Failed to upload image to S3");
        console.log(response.body);
        })
        .catch(err => {console.log(err)});
        this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    };

    // handleLongCapture = async () => {
    //     const videoData = await this.camera.recordAsync();
    //     this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
    // };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <React.Fragment>
                <View>
                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                </View>
                {captures.length > 0 && <Gallery captures={captures}/>}

                <Toolbar 
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    // onCaptureIn={this.handleCaptureIn}
                    // onCaptureOut={this.handleCaptureOut}
                    // onLongCapture={this.handleLongCapture}
                    onShortCapture={this.handleShortCapture}
                />
            </React.Fragment>

        );
    };
};