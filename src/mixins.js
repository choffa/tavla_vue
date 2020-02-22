
import { ZonedDateTime } from "@js-joda/core";

export const NowMixin = {
  data() {
    const vm = this;
    vm.$options.now = nowOptions(vm.$options.now || {});
    const opt = vm.$options.now;

    return {
      [opt.name]: ZonedDateTime.now(),
      [opt.name + "Instance"]: null
    }
  },

  created() {
    const vm = this;
    const opt = vm.$options.now;

    vm.nowInstance = setInterval(function () {
      vm[opt.name] = ZonedDateTime.now();
    }, opt.interval);
  },

  beforeDestroy() {
    const vm = this;
    const opt = vm.$options.now;
    clearInterval(vm[opt.name + "Instance"]);
  },
};

function nowOptions(opt) {
  return {
    interval: opt.interval || 1000 * 60,
    name: opt.name || "now"
  }
}
