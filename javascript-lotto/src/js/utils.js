export const hideElement = ($target) => {
  $target.classList.add("d-none");
};

export const showElement = ($target) => {
  $target.classList.remove("d-none");
};

export const onModalShow = ($modal) => {
  $modal.classList.add("open");
};

export const onModalClose = ($modal) => {
  $modal.classList.remove("open");
};

export const shuffle = (arr) => {
  for (let i = arr.length; i; i -= 1) {
    const j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }
};

export const resetInput = ($input) => {
  $input.value = "";
};

export const countIntersection = (arr1, arr2) => {
  const intersection = arr1.filter((element) => arr2.includes(element));

  return intersection.length;
};
