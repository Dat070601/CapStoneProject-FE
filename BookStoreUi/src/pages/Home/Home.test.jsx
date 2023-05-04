import { render, screen, cleanup } from '@testing-library/react'
import { beforeEach, afterEach, describe, expect, test } from 'vitest'
import Home from './index'
import { Provider } from 'react-redux'
import store from '../../stores'
import renderer from 'react-test-renderer'
import HomeViewModel from './HomeViewModel'

describe("home page test", () => {
  it("should return home page", () => {
    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    expect(component).toBeTruthy()
  })

  // it("should render top five books", () => {
  //   const component = renderer.create(
  //     <Provider store={store}>
  //       <Home />
  //     </Provider>
  //   )
  //   let tree = component.toJSON()
  //   expect(tree).toMatchSnapshot()
  // })
})