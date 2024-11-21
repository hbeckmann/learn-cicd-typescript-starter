import { describe, expect, test } from '@jest/globals';
import { getAPIKey } from '../api/auth';


describe('getAPIKey', () => {
    test('empty headers should return null', () => {
        expect(getAPIKey({})).toBe(null);
    });
});
