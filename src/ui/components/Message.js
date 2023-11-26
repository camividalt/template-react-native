import React from 'react';
import { Text } from 'react-native';
import Telefonica from '../../utilities/styles/TelefonicaFont';
import { COLORS, GRAY } from '../../utilities/styles/Colors';

const Message = (props) => {
    const { text, size, align, font, color, onPress, style, children } = props;

    switch (font) {
        case 'light':
            fontWeightStyle = Telefonica.light;
            break;
        case 'extraLight':
            fontWeightStyle = Telefonica.extraLight;
            break;
        case 'regular':
            fontWeightStyle = Telefonica.regular;
            break;
        case 'regularItalic':
            fontWeightStyle = Telefonica.regularItalic;
            break;
        case 'bold':
            fontWeightStyle = Telefonica.bold;
            break;
        default:
            fontWeightStyle = Telefonica.light;
            break;
    };

    return (
        <Text style={[fontWeightStyle, style,
            size ? { fontSize: size } : { fontSize: 16 },
            align ? { textAlign: align } : { textAlign: 'center' },
            color ? { color: color } : { color: COLORS(GRAY[6], 1) }]}
        >
            {text}
            {children}
        </Text>
    );
};


export default Message;