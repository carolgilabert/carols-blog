import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSvg = styled.svg`
    .st0 {
        fill: #ffffff;
        stroke: #41444d;
        stroke-linecap: round;
        stroke-linejoin: round;
    }
    .st1 {
        fill: #e39ec1;
    }
    .st2 {
        fill: none;
        stroke: #41444d;
        stroke-linecap: round;
        stroke-linejoin: round;
    }
    .st3 {
        fill: #e8f4fa;
    }
    .st4 {
        fill: #ffffff;
    }
    .st5 {
        font-family: 'Bungee';
        fill: #41444d;
    }
    .st6 {
        font-size: 12px;
    }
    .st7 {
        font-size: 7.7754px;
    }
`;

const getMonthString = monthNumber => {
    const months = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec'
    ];

    return months[monthNumber - 1];
};
const getDay = date => date.split('-')[2];
const getMonth = date => getMonthString(parseInt(date.split('-')[1], 10));

const CalendarIcon = ({ date }) => (
    <StyledSvg
        version="1.1"
        id="Icons"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
        width="100px"
        height="100px"
    >
        <title>Calendar Icon</title>
        <g id="_Group_">
            <path
                id="_Rectangle_3"
                className="st0"
                d="M8.6,16h30.8l0,0v19.8c0,1.8-1.5,3.3-3.3,3.3H11.9c-1.8,0-3.3-1.5-3.3-3.3V16L8.6,16z"
            />
            <path
                id="_Rectangle_4"
                className="st1"
                d="M11.9,6.7h24.2c1.8,0,3.3,1.5,3.3,3.3v6l0,0H8.6l0,0v-6C8.6,8.2,10.1,6.7,11.9,6.7
		C11.9,6.7,11.9,6.7,11.9,6.7z"
            />
            <path
                id="_Path_"
                className="st1"
                d="M36.1,6.7H11.9c-1.8,0-3.3,1.5-3.3,3.3c0,0,0,0,0,0.1v2.8c0-1.8,1.5-3.3,3.3-3.3c0,0,0,0,0,0h24.2
		c1.8,0,3.3,1.5,3.3,3.3c0,0,0,0,0,0V10C39.4,8.2,38,6.7,36.1,6.7C36.1,6.7,36.1,6.7,36.1,6.7z"
            />
            <path
                id="_Rectangle_5"
                className="st2"
                d="M11.9,6.7h24.2c1.8,0,3.3,1.5,3.3,3.3v6l0,0H8.6l0,0v-6C8.6,8.2,10.1,6.7,11.9,6.7
		C11.9,6.7,11.9,6.7,11.9,6.7z"
            />
            <path
                id="_Path_2"
                className="st3"
                d="M15.2,9.4L15.2,9.4c-0.6,0-1.1-0.5-1.1-1.1V5c0-0.6,0.5-1.1,1.1-1.1l0,0l0,0
		c0.6,0,1.1,0.5,1.1,1.1v3.3C16.3,8.9,15.8,9.4,15.2,9.4C15.2,9.4,15.2,9.4,15.2,9.4z"
            />
            <path
                id="_Path_3"
                className="st3"
                d="M24,9.4L24,9.4c-0.6,0-1.1-0.5-1.1-1.1v0V5c0-0.6,0.5-1.1,1.1-1.1l0,0c0.6,0,1.1,0.5,1.1,1.1v3.3
		C25.1,8.9,24.6,9.4,24,9.4C24,9.4,24,9.4,24,9.4z"
            />
            <path
                id="_Path_4"
                className="st3"
                d="M32.8,9.4L32.8,9.4c-0.6,0-1.1-0.5-1.1-1.1v0V5c0-0.6,0.5-1.1,1.1-1.1l0,0l0,0
		c0.6,0,1.1,0.5,1.1,1.1c0,0,0,0,0,0v3.3C33.9,8.9,33.4,9.4,32.8,9.4C32.8,9.4,32.8,9.4,32.8,9.4z"
            />
            <path
                id="_Path_5"
                className="st4"
                d="M15.2,3.9c-0.6,0-1.1,0.5-1.1,1.1v1.7c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1l0,0V5
		C16.3,4.4,15.8,3.9,15.2,3.9z"
            />
            <path
                id="_Path_6"
                className="st4"
                d="M24,3.9c-0.6,0-1.1,0.5-1.1,1.1v1.7c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1l0,0V5
		C25.1,4.4,24.6,3.9,24,3.9z"
            />
            <path
                id="_Path_7"
                className="st4"
                d="M32.8,3.9c-0.6,0-1.1,0.5-1.1,1.1v1.7c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1l0,0V5
		C33.9,4.4,33.4,3.9,32.8,3.9z"
            />
            <path
                id="_Path_8"
                className="st2"
                d="M15.2,9.4L15.2,9.4c-0.6,0-1.1-0.5-1.1-1.1V5c0-0.6,0.5-1.1,1.1-1.1l0,0l0,0
		c0.6,0,1.1,0.5,1.1,1.1v3.3C16.3,8.9,15.8,9.4,15.2,9.4C15.2,9.4,15.2,9.4,15.2,9.4z"
            />
            <path
                id="_Path_9"
                className="st2"
                d="M24,9.4L24,9.4c-0.6,0-1.1-0.5-1.1-1.1v0V5c0-0.6,0.5-1.1,1.1-1.1l0,0c0.6,0,1.1,0.5,1.1,1.1v3.3
		C25.1,8.9,24.6,9.4,24,9.4C24,9.4,24,9.4,24,9.4z"
            />
            <path
                id="_Path_10"
                className="st2"
                d="M32.8,9.4L32.8,9.4c-0.6,0-1.1-0.5-1.1-1.1v0V5c0-0.6,0.5-1.1,1.1-1.1l0,0l0,0
		c0.6,0,1.1,0.5,1.1,1.1c0,0,0,0,0,0v3.3C33.9,8.9,33.4,9.4,32.8,9.4C32.8,9.4,32.8,9.4,32.8,9.4z"
            />
            <text transform="matrix(1 0 0 1 16 27.5498)" className="st5 st6">
                {getDay(date)}
            </text>
            <text transform="matrix(1 0 0 1 16 35.2914)" className="st5 st7">
                {getMonth(date)}
            </text>
        </g>
    </StyledSvg>
);

CalendarIcon.propTypes = {
    date: PropTypes.string.isRequired
};

export default CalendarIcon;
