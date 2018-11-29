// ficannabi example

int fib(int n) {
    if(n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}


int countTxt(Directory dir) {
    if(dir == null) return 0;
    int count = 0;

    for(File file: dir) {
        if (file.endsWith(".txt")) {
            count += 1;
        }
    }

    for (Directory subdir : dir) {
        count += countTxt(subdir);
    }
    return count;
}