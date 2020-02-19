

export const getIcon = (mode) => {
  
  switch (mode) {
    case 'air':
      return 'airplane-circle';
    case 'bus':
      return 'bus';
    case 'water':
      return 'boat-circle';
    case 'rail':
      return 'train';
    case 'metro':
      return 'metro';
    case 'tram':
      return 'tram';
    case 'coach':
      return 'bus-circle';
    default:
      return 'questionmark-circle';
  }

};