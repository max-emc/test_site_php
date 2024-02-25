import os

os.system('cls')

os.system("cd resistance")
dossiers = os.walk(os.getcwd())

for dossier in dossiers:
	d = dossier[0]
	path1 = os.path.join("resistance", d, "index.html")
	path2 = os.path.join("resistance", d, "index.php")
	try:
		os.rename(path1, path2)
		print(path1, "-", True)
	except:
		print(path2, "-", False)