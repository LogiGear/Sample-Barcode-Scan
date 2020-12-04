# Sample-Barcode-Scan
We using gondola to run real workflow for generate and scan barcode.
Sample .apk run smooth in Android 8.1 (API 27)

### 1. Set up environment

Please go the url below and follow the instructions to prepare your testing environment.
https://docs.gondolatest.com/mobile-testing-guide/setup-mobile-environment.html#before-you-begin

### 2. Project structure
- Test data folder: **_$project_dir/data_**
- Interface folder: **_$project_dir/src/pages_**
- Test cases folder: **_$project_dir/src/tests_**
- Test configuration files: **_gondola.android.json, gondola.ios.json and gondola.multi.json_**

### 3. Test execution
3.1 Using the command line
- Compile test script: **_"npm run compile"_**
- Run test:
  + iOS: **_"npm run test:ios"_**
  + Android: **_"npm run test:android"_**

3.2 Using the GUI
- Right click on the test file to open it in Gondola Test Designer.
- Click on the run button in the top right in the task bar.
- Select a configuration file.
- Click Run to execute the test.

For more information related to configuring and executing tests, please refer to the following url.

https://docs.gondolatest.com/mobile-testing-guide/mobile-testing-tutorial.html

For support, please contact support@logigear.com or forum https://support.gondolatest.com
