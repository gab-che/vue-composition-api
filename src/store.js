import { reactive } from 'vue';

export const store = reactive({
});

export function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}