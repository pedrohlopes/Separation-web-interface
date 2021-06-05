for filename in ./*
do
	if [ "${filename: -4}" == ".wav" ]; then
	  yes | ffmpeg -i $filename -vn -ar 44100 -ac 2 -b:a 96k "${filename%.*}".mp3
	  mv $filename processed/
	fi
done;
