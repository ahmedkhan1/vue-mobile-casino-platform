
export const CommonMethods = {
  loadIcon(icon) {
    return require(`../assets/icons/${icon}.png`);
  },
  loadImage(image) {
    return require(`../assets/images/${image}.png`);
  },
  loadResponsiveIcons(icon){
    return {
      ic_xm: require(`../assets/icons/${icon}.png`),
      ic_sm: require(`../assets/icons/${icon}@2x.png`),
      ic_lg: require(`../assets/icons/${icon}@3x.png`),
    }
  },
  loadResponsiveIcons3x(icon){
    return {
      ic_xm: require(`../assets/icons/${icon}.png`),
      ic_lg: require(`../assets/icons/${icon}@3x.png`),
    }
  }
};