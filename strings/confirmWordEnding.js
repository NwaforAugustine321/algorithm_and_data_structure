function confirmEnding(str, target) {

  //confirm if a given string ends with a target word or character
  if (str.slice(str.length - target.length) === target) return true;

  return false;
}

confirmEnding("Bastian", "n");