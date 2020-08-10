import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import MyComponent from './MyComponent';

describe('MyComponentTest', () => {

    const elem = shallow(
        <MockedProvider mocks={[]} addTypename={false}>
            <MyComponent/>
        </MockedProvider>
    );
  
    test('it should render something', () => {
      expect(elem).not.toBeNull();
    });

    // This number of dives should get me to whatever MyComponent renders
    // instead I get the Apollo client Invarient Violation
    test('it should render MyComponent', () => {
        expect(elem.dive().dive().dive().dive().dive()).toMatchSnapshot();
      });
});