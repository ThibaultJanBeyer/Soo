import Soo from "../index.js";

const css = `
  svg {
    width: 400px;
    fill: white;
    stroke: black;
    stroke-width: 1;
    stroke-linecap: round;
    transform: rotate(-90deg);
    --start-seconds: 57;
    --start-minutes: 45;
    --start-hours: 11;
  }
  .marks {
    transform: translate(20px, 20px);
    stroke-width: 0.2;
  }
  .marks > line:nth-child(1) {
    /* There are 12 marks, so we rotate by 30deg (12 * 30 = 360) */
    transform: rotate(30deg);
  }
  .marks > line:nth-child(2) {
    transform: rotate(calc(2 * 30deg));
  }
  .marks > line:nth-child(3) {
    transform: rotate(calc(3 * 30deg));
    stroke-width: 0.5;
  }
  .marks > line:nth-child(4) {
    transform: rotate(calc(4 * 30deg));
  }
  .marks > line:nth-child(5) {
    transform: rotate(calc(5 * 30deg));
  }
  .marks > line:nth-child(6) {
    transform: rotate(calc(6 * 30deg));
    stroke-width: 0.5;
  }
  .marks > line:nth-child(7) {
    transform: rotate(calc(7 * 30deg));
  }
  .marks > line:nth-child(8) {
    transform: rotate(calc(8 * 30deg));
  }
  .marks > line:nth-child(9) {
    transform: rotate(calc(9 * 30deg));
    stroke-width: 0.5;
  }
  .marks > line:nth-child(10) {
    transform: rotate(calc(10 * 30deg));
  }
  .marks > line:nth-child(11) {
    transform: rotate(calc(11 * 30deg));
  }
  .marks > line:nth-child(12) {
    transform: rotate(calc(12 * 30deg));
    stroke-width: 0.5;
  }
  .seconds,
  .minute,
  .hour
  {
    transform: translate(0, 0) rotate(0deg);
  }
  .seconds {
    stroke-width: 0.3;
    stroke: #d00505;
  }
  .minute {
    stroke-width: 0.6;
  }
  .hour {
    stroke-width: 1;
  }
  .pin {
    stroke: #d00505;
    stroke-width: 0.2;
  }
  .seconds {
    transform: translate(0, 0) rotate(calc(var(--start-seconds) * 6deg));
  }
  .minute {
    transform: translate(0, 0) rotate(calc(var(--start-minutes) * 6deg));
  }
  .hour {
    transform: translate(0, 0) rotate(calc(var(--start-hours) * 30deg));
    animation: rotateHourHand calc(12 * 60 * 60s) linear infinite;
    animation-delay: calc(calc(var(--start-minutes) * -60 * 1s) + calc(var(--start-seconds) * -1 * 1s));
  }
  @keyframes rotateHourHand {
    from {
       rotate(calc(var(--start-hours) * 30deg));
    }
    to {
      transform: translate(0, 0) rotate(calc(var(--start-hours) * 30deg + 360deg));
    }
  }
`;

class Time extends Soo {
  installed() {
    setInterval(() => {
      const currentTime = new Date();
      const svg = this.shadowRoot.querySelector("svg");
      svg.style.setProperty("--start-seconds", currentTime.getSeconds());
      svg.style.setProperty("--start-minutes", currentTime.getMinutes());
      svg.style.setProperty("--start-hours", currentTime.getHours() % 12);
    }, 100);
  }

  css() {
    return css;
  }

  render() {
    return HTML`<svg viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="19" />
                  <g class="marks">
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="15" y1="0" x2="16" y2="0" />
                    <line x1="0" y1="0" x2="9" y2="0" class="hour" />
                    <line x1="0" y1="0" x2="13" y2="0" class="minute" />
                    <line x1="0" y1="0" x2="16" y2="0" class="seconds" />
                    <circle cx="0" cy="0" r="0.7" class="pin" />
                </g>
                </svg>`;
  }
}

customElements.define("time-element", Time);
