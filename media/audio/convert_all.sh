for filename in ./*
do
	echo $filename
	if [ "${filename: -4}" == ".wav" ]; then
	  echo $filename
	  yes | ffmpeg -i $filename -vn -ar 44100 -ac 2 -b:a 96k "${filename%.*}".mp3
	fi
done;
