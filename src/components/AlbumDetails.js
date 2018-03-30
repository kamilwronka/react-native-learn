
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { thumbnailStyle, albumImageStyle, textContainer, thumbnailContainerStyle, headerTextStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                />
                </View>
                <View style={textContainer}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={albumImageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button />
            </CardSection>
        </Card>
    );
}

const styles = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginLeft: 10, 
        marginRight: 10
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;