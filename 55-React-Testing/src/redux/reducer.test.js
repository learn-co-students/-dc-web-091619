import React from 'react';
import reducer from './reducer';

describe("manageBand", () => {
    it("test empty state", () => {
        let action = {type: 'No array'}

        let mockState = reducer(undefined, action)

        expect(mockState.myBands).toEqual([])

    })
    it("submit add band" , () => {
        let action = {
            type: "ADD_BAND",
            name: "Panamore"
        }

        let mockState = {
            myBands: [
                {
                    id: 1,
                    name: "backstreetboys"
                },
                {
                    id: 2,
                    name: "Spice girls"
                }
            ]
        }

        let result = reducer(mockState, action)
        expect(result.myBands.length).toBe(3)
    })
    
    it("Delete Band" , () => {
        let action = {
            type: 'DELETE_BAND',
            id: 2
        }

        let mockState = {
            myBands: [
                {
                    id: 1,
                    name: "backstreetboys"
                },
                {
                    id: 2,
                    name: "Spice girls"
                }
            ]
        }

        let result = reducer(mockState, action)

        expect(result.myBands.length).toBe(1)
        expect(result.myBands[0].name).toEqual("backstreetboys")
    })
})