/*
Navicat MySQL Data Transfer

Source Server         : user
Source Server Version : 50630
Source Host           : localhost:3306
Source Database       : shopping

Target Server Type    : MYSQL
Target Server Version : 50630
File Encoding         : 65001

Date: 2018-01-12 11:08:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `uPwd` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `uTel` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `uEmail` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', 'herenfu', '12345678', '13511111111', '111@qq.com');
