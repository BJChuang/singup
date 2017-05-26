(function(win,doc){
    function change(){
        doc.documentElement.style.fontSize=
            50*doc.documentElement.clientWidth/320+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);
//验证手机号

