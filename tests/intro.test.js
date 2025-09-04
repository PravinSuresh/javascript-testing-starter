import { describe, it, test, expect } from "vitest";
import { max, fizzBuzz, average } from "../src/intro";

describe('max', () => {
    it('should return the first arguement if it is greater', ()=>{
        const a = 2;
        const b = 1;

        const result = max(a,b);
        
        expect(result).toBe(a);
    })

    it('should return the second arguement if it is greater', ()=>{
        const a = 1;
        const b = 2;

        const result = max(a,b);
        
        expect(result).toBe(b);
    })
    it('should return the first arguement if both are equal', ()=>{
        const a = 1;
        const b = 1;

        const result = max(a,b);
        
        expect(result).toBe(b);
    })
});

describe('fizzBuzz',  ()=> {
    it('should return fizz if number is divisible by 3', ()=> {
        expect(fizzBuzz(6)).toBe('Fizz');
    });
    it('should return buzz if number is divisible by 5', ()=> {
        expect(fizzBuzz(10)).toBe('Buzz');
    });
    it('should return fizzbuzz if number is divisible by 3', ()=> {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('should return the number if number is neither divisible by 3 nor 5', ()=> {
        expect(fizzBuzz(2)).toBe("2");
    });
})

describe('calculate average',  () => {
    it('should return NaN if given an empty array', ()=> {
        expect(average([])).toBe(NaN);
    })
    it('should calculate the average of the array with a single element', ()=> {
        expect(average([1])).toBe(1);
    })
    it('should calculate the average of the array with a two elements', ()=> {
        expect(average([1,3])).toBe(2);
    })
    it('should calculate the average of the array with a three elements', ()=> {
        expect(average([1,3,6])).toBe((1+3+6)/3);
    })
})