const messageStyle = room => ({
  width: room.message.length * 8 <= 100 ? room.message.length * 8 + '%' : '100%',
  backgroundColor: parseInt(room.id) % 2 === 0 ? '#AFDEF8' : '#5FED9A',
  float: parseInt(room.id) % 2 === 0 ? 'right' : 'left',
  clear: 'both',
});

export { messageStyle };
