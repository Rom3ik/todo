export default () => ({
  port: process.env.PORT,
  access_secret: process.env.SECRET,
  access_expire: process.env.EXPIRE_JWT,
  refresh_expire: process.env.EXPIRE_REFRESH_JWT,
  refresh_secret: process.env.REFRESH_SECRET,
});
