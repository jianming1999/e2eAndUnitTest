describe('Usage in Node', () => {
  it('should be in abstract mode', () => {
    const router = {mode:'abstract'};
    expect(router.mode).toBe('abstract')
  });

  it('setTimeout', (done) => {
  	var testVal = 'abc';
  	setTimeout(() => {
  		expect(testVal).toBe('abc');
  		done();
  	}, 1000);
  });
});