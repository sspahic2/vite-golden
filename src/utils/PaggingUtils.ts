
export function calculatePaging(pageInfo: { totalPages: number; currentPage: number }): string[] {
    const pArr = [];

    if (pageInfo) {
        const total = pageInfo?.totalPages;
        const current = pageInfo?.currentPage;

        if (total <= 10) {
            for (let i = 1; i <= total; i++) {
                pArr.push(`${i}`);
            }
        } else if (total > 10 && current - 7 <= 0) {
            for (let i = 1; i <= 8; i++) {
                pArr.push(`${i}`);
            }

            pArr.push('...');
            for (let i = total - 1; i <= total; i++) {
                pArr.push(`${i}`);
            }

        } else if (total > 10 && total - 7 > 0 && total - current > 5) {
            for (let i = 1; i <= 2; i++) {
                pArr.push(`${i}`);
            }
            pArr.push('...');

            for (let i = current; i <= current + 4; i++) {
                pArr.push(`${i}`);
            }

            pArr.push('...');
            for (let i = total - 1; i < total; i++) {
                pArr.push(`${i + 1}`);
            }
        } else {
            for (let i = 1; i <= 2; i++) {
                pArr.push(`${i}`);
            }
            pArr.push('...');
            for (let i = total - 5; i <= total; i++) {
                pArr.push(`${i}`);
            }
        }
    }

    return pArr;
}




export const calculatePagingAll = (paging: { totalPages: number }): number[] => {
    const pageNumbers = [];
    for (let i = 1; i <= paging.totalPages; i++) {
        pageNumbers.push(i);
    }
    return pageNumbers;
};

