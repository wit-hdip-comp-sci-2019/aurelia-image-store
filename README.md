# `aurelia-image-store`

Aurelia version of 

- <https://github.com/wit-hdip-comp-sci-2019/hapi-image-store>

For uploading to Cloudinary.

Requires Cloudinary name + upload preset in config/envrionment.json

## config/environments.json

~~~
{
  "debug": true,
  "testing": true,
  "cloudinary": {
    "name": "YOUR_CLOUDINART_NAME",
    "preset": "PRESET"
  }
}
~~~

To generate a preset, go to Cloudinary Settings->Upload page, and add an unsigned upload preset.

The application only support image updload, not delete.
