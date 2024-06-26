 # Telegraph-Image-auth

This project is a fork of the [Telegraph-Image](https://github.com/cf-pages/Telegraph-Image) project, with added front-end authentication and a random image script, making it suitable for use as wallpaper.

The original project is a good one, but it has a significant flaw: anyone can post data to the deployed interface, which can lead to image source pollution. To address this issue, an upload authentication has been added to increase the difficulty of polluting the image source.

After deploying the project by njzzzz, it was found that it would result in an infinite 302, constantly asking for a password, but even after inputting the password, it would not function properly. Therefore, some improvements had to be made to the original project.

## Differences from the Original Project

In addition to using the original project's deployment method, an authentication code must be added to authenticate the identity of the user uploading the image.

### 1. In the environment variable, add AUTH\_CODE with a value of your custom password.

### 2. After successful deployment, the main page cannot directly upload images and will prompt for authorization. There are two ways to pass the key parameter.
1. Directly visit <https://yourdomain.page.dev/?autocode=yourpassword> in the browser and then upload the image on the page.
2. Use picgo/piclist and the Telegraph-Image-uploader plugin. Since the original plugin author has hard-coded the path, it cannot be used directly. A modified and usable [plugin script](https://github.com/maytom2016/picgo-plugin-telegraph-image-auth) is available, copy it to the plugin directory and replace the original js file. After restarting picgo/piclist, fill in the URL parameter as <https://yourdomain.page.dev/yourpassword>, save the configuration, and it can be used.

### 3. A new interface has been added to randomly return an image, which is useful for wallpapers.

<https://yourdomain.page.dev/randompic>

## Precautions

1. The image itself is stored in Telegra.ph. As far as I know, there is no way to delete the image after uploading it. The project uses a deletion method that only removes the image record from the kv entry. Therefore, deletion only means that you cannot see it, but the image still exists on telegra.ph and can be accessed publicly. To verify this, delete a record and try accessing the image using <https://telegra.ph/file/+filename>, where filename is the name of the deleted image file.
2. The author has no intention of further improving the project, and only the files functions/upload.js, randompic.js, and [authcode].js have been modified. The other files have not been changed, and can be highly compatible with the original project. In the future, only these three files need to be kept unchanged, and the latest improvements can be pulled from the original project.

## Acknowledgements

* [cf-pages](https://github.com/cf-pages/Telegraph-Image)
* [njzzzz](https://github.com/njzzzz/Telegraph-Image)
* [secflag](https://github.com/secflag/picgo-plugin-telegraph-image)