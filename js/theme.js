let theme = {
    themeType: 'indigo-theme',
    secondaryColor: '4ebdd4',
    update: function() {
        if (document.getElementById('edit')) {
            document.getElementById('edit').style.backgroundColor = this.secondaryColor;
        }

        $('.content-wrapper')[0].classList.value = `content-wrapper ${this.themeType}`;
        document.getElementById('nav').classList.value = `nav-wrapper navbar-fixed ${this.themeType}`;
        $('.menu-btn')[0].childNodes.forEach(el => {
            if (el.nodeType !== 3) {
                el.style.backgroundColor = this.secondaryColor;
            }
        });
        localStorage.setItem('secondaryColor', this.secondaryColor);
        localStorage.setItem('themeType', this.themeType);
    },
    coolUpdate() {
        let secondaryColor = localStorage.getItem('secondaryColor') || this.secondaryColor;
        let themeType = localStorage.getItem('themeType') || this.themeType;

        if (document.getElementById('edit')) {
            document.getElementById('edit').style.backgroundColor = secondaryColor;
        }

        $('.content-wrapper')[0].classList.value = `content-wrapper ${themeType}`;
        document.getElementById('nav').classList.value = `nav-wrapper navbar-fixed ${themeType}`;
        $('.menu-btn')[0].childNodes.forEach(el => {
            if (el.nodeType !== 3) {
                el.style.backgroundColor = secondaryColor;
            }
        });
    }
};

export default theme;