module.exports = {
	css: {
			loaderOptions: {
					css: {
							// options here will be passed to css-loader
					},
					postcss: {
							plugins: [
									require("postcss-plugin-px2rem")({
											rootValue: 37.5, //换算基数，
											// unitPrecision: 5, //允许REM单位增长到的十进制数字。
											//propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
											propBlackList: ["border"], //黑名单
											exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法。默认值为false，即该项目中所有的px均会被转换为rem
											//（以上exclude配置，如/node_modules|pc/i  排除node_modules文件夹以及所有名为pc的文件夹下的，所有文件的px转换）
											selectorBlackList: ['van-', 'el-'], //要忽略并保留为px的选择器。此处举例：van-为vant-UI的前缀，el-为element-UI的前缀
											// ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
											// replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
											mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
											minPixelValue: 2, //设置要替换的最小像素值(2px会被转rem)。 默认 0
									}),
							]

					}
			}
	}
}