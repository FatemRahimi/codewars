function returnFive() {
    return 5;
  }
  
  test('Return value is always 5', () => {
    expect(returnFive()).toBe(5);
  });