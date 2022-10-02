repo="ts-node-eslint-jest"

copy_file() {
    file=$1
    echo "copy" ${file} "..."
    rm -f ${file}
    touch ${file}
    cat ${repo}/${file} >>${file}
}

echo "clone" ${repo} "..."
git clone https://github.com/longmarch1/${repo}.git

# .editorconfig
copy_file ".editorconfig"

# .gitignore
copy_file ".gitignore"

# setup .eslintrc
copy_file ".eslintrc"

# tsconfig.json
copy_file "tsconfig.json"

# add example.ts and example.test.ts
copy_file "example.ts"
copy_file "example.test.ts"
copy_file "sum.ts"
copy_file "sum.test.ts"

# npm create package.json
copy_file "package.json"

npm i --save-dev

# Remove git repo
rm -rf ${repo}

echo ""
echo "run \"npm test\" to see unit test result"
