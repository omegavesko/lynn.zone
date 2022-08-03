export const getSocialImageForBlogPost = (title: string) =>
  `https://res.cloudinary.com/dddhyuscu/image/upload/c_fit,l_text:Barlow_128_medium:` +
  encodeURIComponent(title)
    .replaceAll(`%2F`, `%252F`)
    .replaceAll(`%2C`, `%252C`) +
  `,co_rgb:f4f4f5,w_1688,h_500/fl_layer_apply,g_north_west,x_180,y_600/lynn.zone_social_image_template.png`;
