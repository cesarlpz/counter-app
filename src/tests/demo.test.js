describe('Tests in file demo.test.js', () => {
    test('strings comparison should be true', () => {
        
        //1. Initialization
        const message1 = "Hello world";
    
        //2. Stimulus
        const message2 = `Hello world`;
    
        //3. Observe behavior
        expect (message1).toBe (message2);
    });
});