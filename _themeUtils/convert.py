from os import listdir
from os.path import isfile, join

# Get all files in the SVGs folder and outputs them on index.ts to convert
# them to React components

svgs_path = "../components/atoms/svgs/"
output_path = "../components/atoms/svgs/"

files_only = [f for f in listdir(svgs_path) if (isfile(join(svgs_path, f)))]
files_only = [f for f in files_only if f.endswith(".svg")]

def convertToCamelCase(st):
    output = ''.join(x for x in st.title() if x.isalnum())
    return output[0].lower() + output[1:]

with open(output_path + "index.ts", "w") as newFile:
  for f in files_only:
    nameWithoutExtension = f.split(".")[0]
    newFile.write("export { default as " + convertToCamelCase(nameWithoutExtension.replace("-", " ")).replace(" ", "") + " } from './" + nameWithoutExtension + ".svg';\n")