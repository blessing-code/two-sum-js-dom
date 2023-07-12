let answerEl = document.getElementById("pTag");
let randomTargetEl = document.getElementById("randomTarget");

let nums = [2, 7, 11, 15, 36, 87, 1, 90, 21, 12, 25, 61, 30, 41, 3, 4, 5, 10, 8, 42, 6, 12, 13, 54, 33, 25];
let targetArry = [1,2,21,42,61,11,3,5,6,4,7,9,45,23,61,99,70,74,6]
targetArry = Math.floor(Math.random() * 100)

console.log(targetArry)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

function solve() {
    answerEl.innerText = twoSum(nums, targetArry)
    randomTargetEl.innerText = targetArry;
}