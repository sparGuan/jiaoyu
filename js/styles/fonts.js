// src/styles/fonts.js

const fonts = {
};
const iniFonts = () => {
    for (let i = 0; i < 50; i++) {
        fonts[`fz_${i}`] = {
            "fontSize": i
        }
    }
}
iniFonts()
export default fonts;
