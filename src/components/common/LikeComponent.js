/* eslint-disable max-len */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const likeSvg = color => (
  <svg width='30'
height='30'
viewBox='0 0 30 30'
fill='none'
xmlns='http://www.w3.org/2000/svg'>
<g clipPath='url(#clip0)'>
<rect x='-954' y='-365' width='1440' height='4522'/>
<path fill={color} fillOpacity='0.5'
d="M28.7063 20.3952C29.3211 19.611 29.6159 18.7704 29.5783 17.9046C29.5407 16.9511 29.114 16.2045 28.7627 15.7465C29.1705 14.7302 29.3274 13.1305 27.966 11.8883C26.9685 10.9787 25.2747 10.5709 22.9284 10.6838C21.2784 10.7591 19.8982 11.0665 19.8418 11.079H19.8355C19.5218 11.1355 19.1893 11.2045 18.8506 11.2798C18.8255 10.8783 18.8945 9.8808 19.6348 7.63488C20.513 4.96236 20.4629 2.91719 19.4716 1.54956C18.4302 0.112924 16.7678 0 16.2784 0C15.8079 0 15.375 0.194479 15.0676 0.55207C14.3713 1.36135 14.4528 2.85445 14.5407 3.54454C13.7125 5.76537 11.3913 11.2108 9.42773 12.7227C9.39009 12.7478 9.35872 12.7792 9.32735 12.8105C8.75019 13.4191 8.36123 14.0778 8.09774 14.655C7.7276 14.4542 7.30728 14.3413 6.85558 14.3413H3.02873C1.58582 14.3413 0.418945 15.5144 0.418945 16.9511V27.1455C0.418945 28.5885 1.59209 29.7553 3.02873 29.7553H6.85558C7.41393 29.7553 7.93463 29.5797 8.36123 29.2785L9.83551 29.4542C10.0614 29.4856 14.0764 29.9937 18.1981 29.9122C18.9447 29.9686 19.6473 30 20.2997 30C21.4227 30 22.4014 29.9122 23.2169 29.7365C25.1366 29.3287 26.4478 28.5132 27.1128 27.3149C27.621 26.399 27.621 25.4893 27.5394 24.9122C28.7878 23.7829 29.0074 22.5345 28.9635 21.6562C28.9384 21.1481 28.8255 20.7152 28.7063 20.3952ZM3.02873 28.0615C2.52058 28.0615 2.1128 27.6474 2.1128 27.1455V16.9448C2.1128 16.4366 2.52685 16.0289 3.02873 16.0289H6.85558C7.36374 16.0289 7.77152 16.4429 7.77152 16.9448V27.1393C7.77152 27.6474 7.35746 28.0552 6.85558 28.0552H3.02873V28.0615ZM27.1002 19.6612C26.8368 19.9373 26.7866 20.3576 26.9873 20.6838C26.9873 20.6901 27.2445 21.1292 27.2759 21.7315C27.3198 22.5533 26.9246 23.2811 26.0965 23.9021C25.8016 24.128 25.6824 24.5169 25.8079 24.8683C25.8079 24.8745 26.0777 25.7026 25.6385 26.4868C25.2182 27.2396 24.2834 27.7792 22.8656 28.0803C21.7301 28.325 20.1868 28.3689 18.2922 28.2183C18.2671 28.2183 18.2358 28.2183 18.2044 28.2183C14.1705 28.3061 10.0927 27.7792 10.0488 27.7729H10.0425L9.40891 27.6976C9.44655 27.522 9.46537 27.3337 9.46537 27.1455V16.9448C9.46537 16.675 9.42145 16.4115 9.34617 16.1669C9.4591 15.7465 9.77277 14.8118 10.513 14.0151C13.3299 11.7817 16.0839 4.24718 16.2031 3.92095C16.2533 3.78921 16.2659 3.64492 16.2408 3.50063C16.1341 2.79799 16.1718 1.93852 16.3223 1.6813C16.6548 1.68758 17.5519 1.78168 18.0915 2.52823C18.7314 3.4128 18.7063 4.99373 18.0162 7.08908C16.9622 10.2823 16.8744 11.9636 17.7088 12.7039C18.1228 13.074 18.6749 13.0928 19.0764 12.9486C19.4591 12.8607 19.823 12.7854 20.168 12.729C20.1931 12.7227 20.2245 12.7164 20.2496 12.7102C22.1755 12.2898 25.626 12.0326 26.8242 13.1242C27.8405 14.0527 27.1191 15.2823 27.0375 15.4141C26.8054 15.7654 26.8744 16.2233 27.1881 16.5056C27.1944 16.5119 27.8531 17.133 27.8844 17.9674C27.9095 18.5257 27.646 19.0966 27.1002 19.6612Z"
         />
<rect x='-954' y='-365' width='1440' height='4522'/>
<path fill={color} fillOpacity='0.5'
d="M28.7063 20.3952C29.3211 19.611 29.6159 18.7704 29.5783 17.9046C29.5407 16.9511 29.114 16.2045 28.7627 15.7465C29.1705 14.7302 29.3274 13.1305 27.966 11.8883C26.9685 10.9787 25.2747 10.5709 22.9284 10.6838C21.2784 10.7591 19.8982 11.0665 19.8418 11.079H19.8355C19.5218 11.1355 19.1893 11.2045 18.8506 11.2798C18.8255 10.8783 18.8945 9.8808 19.6348 7.63488C20.513 4.96236 20.4629 2.91719 19.4716 1.54956C18.4302 0.112924 16.7678 0 16.2784 0C15.8079 0 15.375 0.194479 15.0676 0.55207C14.3713 1.36135 14.4528 2.85445 14.5407 3.54454C13.7125 5.76537 11.3913 11.2108 9.42773 12.7227C9.39009 12.7478 9.35872 12.7792 9.32735 12.8105C8.75019 13.4191 8.36123 14.0778 8.09774 14.655C7.7276 14.4542 7.30728 14.3413 6.85558 14.3413H3.02873C1.58582 14.3413 0.418945 15.5144 0.418945 16.9511V27.1455C0.418945 28.5885 1.59209 29.7553 3.02873 29.7553H6.85558C7.41393 29.7553 7.93463 29.5797 8.36123 29.2785L9.83551 29.4542C10.0614 29.4856 14.0764 29.9937 18.1981 29.9122C18.9447 29.9686 19.6473 30 20.2997 30C21.4227 30 22.4014 29.9122 23.2169 29.7365C25.1366 29.3287 26.4478 28.5132 27.1128 27.3149C27.621 26.399 27.621 25.4893 27.5394 24.9122C28.7878 23.7829 29.0074 22.5345 28.9635 21.6562C28.9384 21.1481 28.8255 20.7152 28.7063 20.3952ZM3.02873 28.0615C2.52058 28.0615 2.1128 27.6474 2.1128 27.1455V16.9448C2.1128 16.4366 2.52685 16.0289 3.02873 16.0289H6.85558C7.36374 16.0289 7.77152 16.4429 7.77152 16.9448V27.1393C7.77152 27.6474 7.35746 28.0552 6.85558 28.0552H3.02873V28.0615ZM27.1002 19.6612C26.8368 19.9373 26.7866 20.3576 26.9873 20.6838C26.9873 20.6901 27.2445 21.1292 27.2759 21.7315C27.3198 22.5533 26.9246 23.2811 26.0965 23.9021C25.8016 24.128 25.6824 24.5169 25.8079 24.8683C25.8079 24.8745 26.0777 25.7026 25.6385 26.4868C25.2182 27.2396 24.2834 27.7792 22.8656 28.0803C21.7301 28.325 20.1868 28.3689 18.2922 28.2183C18.2671 28.2183 18.2358 28.2183 18.2044 28.2183C14.1705 28.3061 10.0927 27.7792 10.0488 27.7729H10.0425L9.40891 27.6976C9.44655 27.522 9.46537 27.3337 9.46537 27.1455V16.9448C9.46537 16.675 9.42145 16.4115 9.34617 16.1669C9.4591 15.7465 9.77277 14.8118 10.513 14.0151C13.3299 11.7817 16.0839 4.24718 16.2031 3.92095C16.2533 3.78921 16.2659 3.64492 16.2408 3.50063C16.1341 2.79799 16.1718 1.93852 16.3223 1.6813C16.6548 1.68758 17.5519 1.78168 18.0915 2.52823C18.7314 3.4128 18.7063 4.99373 18.0162 7.08908C16.9622 10.2823 16.8744 11.9636 17.7088 12.7039C18.1228 13.074 18.6749 13.0928 19.0764 12.9486C19.4591 12.8607 19.823 12.7854 20.168 12.729C20.1931 12.7227 20.2245 12.7164 20.2496 12.7102C22.1755 12.2898 25.626 12.0326 26.8242 13.1242C27.8405 14.0527 27.1191 15.2823 27.0375 15.4141C26.8054 15.7654 26.8744 16.2233 27.1881 16.5056C27.1944 16.5119 27.8531 17.133 27.8844 17.9674C27.9095 18.5257 27.646 19.0966 27.1002 19.6612Z"
/>
</g>
<defs>
<clipPath id= 'clip0' >
<rect width='30' height='30' fill='green'/>
</clipPath>
</defs>
</svg>
);


const LikeComponent = ({ likeCount, color }) => (
<Fragment>
<span className = 'icon_holder'>
 {likeSvg(color)}
<sub className='count'>{likeCount}</sub>
</span>
</Fragment>
);


LikeComponent.propTypes = {
  likeCount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default LikeComponent;
