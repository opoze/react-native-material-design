import React, {Component} from "react";
import {ViewPropTypes} from "react-native";
import { getColor } from './helpers';
import VectorIconComponent from './VectorIconComponent';
import PropTypes from 'prop-types';

export default class Icon extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        style: ViewPropTypes.style,
        size: PropTypes.number,
        color: PropTypes.string,
        allowFontScaling: PropTypes.bool
    };

    static defaultProps = {
        size: 30,
        color: '#757575',
        allowFontScaling: true
    };

    render() {
        const { name, style, size, color, allowFontScaling} = this.props;
        const VectorIcon = VectorIconComponent.get();

        return (
            <VectorIcon
                name={name}
                size={size}
                color={getColor(color)}
                style={style}
                allowFontScaling={allowFontScaling}
            />
        );
    }
}
