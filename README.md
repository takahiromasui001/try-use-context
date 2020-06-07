useContext + useState におけるパフォーマンス上の懸念と、その解消法として(不本意ながら)Reduxを使っちゃう話
https://qiita.com/jonakp/private/58c9c383473d02479ea7

のサンプルコードです。

## 記事のサンプルコードとブランチ名の対応
記事のサンプル1, 2, 3のそれぞれに対応したブランチを作成しています。
必要に応じて切り替えてください。

|  サンプル  |  ブランチ名  |
| ---- | ---- |
|  サンプル1: useContext + useStateの利用  |  use_context  |
|  サンプル2: useContext + useState & React.memoの利用  |  use_context_with_react_memo  |
|  サンプル3: Reduxの利用  |  use_redux  |

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
