all:
	#ionic run android
	rm -rvf publish/sstj.apk
	cordova build --release android
	jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore publish/u250.keystore platforms/android/ant-build/HelloCordova-release-unsigned.apk u250
	zipalign -v 4 platforms/android/ant-build/HelloCordova-release-unsigned.apk publish/sstj.apk
	adb uninstall info.u250.sstj
	adb install publish/sstj.apk
