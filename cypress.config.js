const { defineConfig } = require("cypress");

require("dotenv").config();

module.exports = defineConfig({
    video: false,
    e2e: {
        baseUrl: "https://weathershopper.pythonanywhere.com/",
        viewportHeight: 1080,
        viewportWidth: 1920,
       
    },
});

