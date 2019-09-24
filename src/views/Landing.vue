<template>
  <div :style="getBackground" class="landing">
    <div :class="{up : showSkills}" class="text-area">
      <h1 :style="getTextColor">Amr Ahmed Taher...</h1>

      <h2 :style="getTextColor">{{belowText}}</h2>

      <h3 :style="getTextColor">
        Hire me ?
        <a
          href="https://www.linkedin.com/in/amr-taher-442228140/"
          target="__blank"
        >My Linked In</a>
      </h3>
    </div>
    <div v-if="showSkills" class="bouncing_area"></div>

    <canvas id="icanvas"></canvas>
  </div>
</template>

<style lang="scss" scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.landing,
h1,
h2,
h3 {
  transition: 0.3s all linear;
}
h3 {
  a {
    color: unset;
    text-decoration: underline;
  }
}
.landing {
  display: flex;
  min-height: 100vh;
}
.text-area.up {
  transform: translateY(-50%);
}
.text-area {
  transition: all 0.5s linear;
  z-index: 500;
  text-align: center;
  margin: auto;
  h1 {
    font-size: calc(0.2vw + 4.16rem);
    font-weight: bold;
    margin-bottom: 0;
  }
  h2 {
    font-weight: bold;
  }
}
</style>

<script>
import _ from "lodash";
import Skill from "../models/skills";
export default {
  name: "landing",
  data: function() {
    return {
      message: "",
      showSkills: false,
      icons: [
        require("../assets/angular.png"),
        require("../assets/cloud.png"),
        require("../assets/csharp.png"),
        require("../assets/git.png"),
        require("../assets/native.png"),
        require("../assets/py.png"),
        require("../assets/react.png"),
        require("../assets/react2.png"),
        require("../assets/sublime.png"),
        require("../assets/travis.png"),
        require("../assets/vue.png"),
        require("../assets/html.png"),
        require("../assets/ml.png"),
        require("../assets/vue.png")
      ],
      skills: [],
      ctx: {},
      canvas: {}
    };
  },
  mounted: function() {
    this.canvas = document.getElementById("icanvas");
    this.canvas.setAttribute("height", window.innerHeight  + "px");
    this.canvas.setAttribute("width", window.innerWidth + "px");
    this.ctx = this.canvas.getContext("2d");
    this.icons = this.icons.sort(() => Math.random() - 0.5);
    this.icons.forEach(icon => {
      this.skills.push(new Skill(icon, this.ctx));
    });
    console.log(this.skills);
    const appBody = document.getElementById("app");
    appBody.addEventListener("mousemove", e => {
      if (e.screenX > appBody.offsetWidth / 2) {
        this.changeState(true);
      } else {
        this.changeState(false);
      }
    });
  },
  computed: {
    getTextClass: function() {
      return  this.showSkills ? 'up' : ''
    },
    getTextColor() {
      return {
        color: this.showSkills ? "white" : "black"
      };
    },
    getBackground: function() {
      return {
        background: this.showSkills ? "black" : "white"
      };
    },
    belowText: function() {
      return this.showSkills
        ? "See my skills raining!"
        : "Move the mouse to the right to";
    }
  },
  methods: {
    changeState: function(data) {
      this.showSkills = data;
    },
    startAnim: function() {
      // skill.imgTag.onload = animate;
      for (let i = 0; i < this.skills.length; i++) {
        this.skills[i].resetValues();
      }
      const animate = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.skills.length; i++) {
          this.skills[i].draw();
          this.skills[i].move();
          this.skills[i].debounce();
        }
        if (this.showSkills) requestAnimationFrame(animate);
        else {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
      };
      animate();
    }
  },
  watch: {
    showSkills: function(val) {
      if (val) {
        this.startAnim();
      }
    }
  }
};
</script>