import { onMounted, onUnmounted } from 'vue';

export default function useInterval(callback: () => void, time = 1000) {
  let timer: any = null;
  
  function start() {
    stop();
    timer = setInterval(callback, time);
  }

  function stop() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  onMounted(start);
  onUnmounted(stop);

  return { start, stop };
}