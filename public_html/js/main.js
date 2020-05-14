

///autoplay music
const CLIP = document.createElement('audio');
var ms;
var pio;



function init()
{
    loadPio();
    
    if (window.localStorage.getItem('posterGirl') === "0")
    {
        window.localStorage.clear();
    }
//
    CLIP.src = "http://music.163.com/song/media/outer/url?id=437250680.mp3";
    ms = setInterval(function () {
        try {
            CLIP.play();
        } catch (e) {
            console.error(e);
        }
    }, 1000
            );
    ;
    
    document.getElementById('body').style.setProperty("background-image","url('img/wp.webp')");
    
    document.getElementById('wrapper').style.setProperty("display","block");
    document.getElementById('loader').style.setProperty("display","none");
}


function loadPio()
{
    console.log("start load pio process");
    //initalize the girl
    pio = new Paul_Pio({
        "mode": "draggable",
        "hidden": false,
        "content": {
            "welcome": ["Welcome to my website!", "Let's have fun together!"],
            "custom": [
                {"selector": ".comment-form", "text": "欢迎参与本文评论，别发小广告噢~"},
                {"selector": ".home-social a:last-child", "text": "在这里可以了解博主的日常噢~"},
                {"selector": ".post-item a", "type": "read"},
                {"selector": ".post-content a, .page-content a", "type": "link"},
                {"selector": "#nolikebtn", "text": "Heng! You will regret for clicking this!"},
                {"selector": "#email", "type": "click", "text": "Please use your school email"}
            ],
            "touch": "Thank you for touching me! mmm~",
            "copy": []
        },
        /* "night": "alert('night mode is not supported. Sorry\n\
         !')",*/
        "model": ["models/pio/model.json"],
        "referer": "Welcome my friend from %t"


    });
}

