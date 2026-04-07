// Lấy năm hiện tại
        const currentYear = new Date().getFullYear();
        
        // Dữ liệu mẫu cho 29 văn bản - ID sẽ được thêm tự động (ĐÃ XÓA id THỦ CÔNG)
        const rawGuideData = [
            {
                title: "Hướng dẫn chẩn đoán và điều trị tăng huyết áp",
                category: "Tim mạch",
                docNumber: "3192/QĐ-BYT",
                issueDate: "31/08/2010",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3192-QD-BYT-Huong-dan-chan-doan-dieu-tri-tang-huyet-ap-112471.aspx?dll=true",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và xử trí hội chứng mạch vành cấp",
                category: "Tim mạch",
                docNumber: "2187/QĐ-BYT",
                issueDate: "03/06/2019",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-2187-QD-BYT-2019-tai-lieu-Huong-dan-chan-doan-xu-tri-hoi-chung-mach-vanh-cap-416271.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị hội chứng mạch vành mạn",
                category: "Tim mạch",
                docNumber: "2248/QĐ-BYT",
                issueDate: "19/05/2023",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-2248-QD-BYT-2023-Huong-dan-chan-doan-va-dieu-tri-Hoi-chung-mach-vanh-man-566890.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị suy tim cấp và mạn",
                category: "Tim mạch",
                docNumber: "1857/QĐ-BYT",
                issueDate: "30/07/2023",
                status: "active",
                documentLink: "https://kcb.vn/phac-do/quyet-dinh-1857-qd-byt-ngay-05-07-2022-ve-viec-ban-hanh-tai-lieu-chuyen-mon-huong-dan-chan-doan-va-dieu-tri-suy-tim-cap-.html",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị đột quỵ não",
                category: "Tim mạch",
                docNumber: "3312/QĐ-BYT",
                issueDate: "05/11/2024",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3312-QD-BYT-2024-tai-lieu-chuyen-mon-Huong-dan-chan-doan-dieu-tri-dot-quy-nao-651734.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị hen phế quản người lớn và trẻ em ≥ 12 tuổi",
                category: "Hô hấp",
                docNumber: "1851/QĐ-BYT",
                issueDate: "24/04/2020",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-1851-QD-BYT-2020-tai-lieu-Huong-dan-chan-doan-hen-phe-quan-nguoi-lon-va-tre-em-441076.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị bệnh phổi tắc nghẽn mạn tính",
                category: "Hô hấp",
                docNumber: "2767/QĐ-BYT",
                issueDate: "04/07/2023",
                status: "active",
                documentLink: "https://kcb.vn/phac-do/quyet-dinh-2767-qd-byt-cua-bo-y-te-ngay-04-07-2023-ve-viec-ban-hanh-tai-lieu-chuyen-mon-huong-dan-chan-doan-va-dieu-tri-.html",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị bệnh viêm gan vi rút B",
                category: "Tiêu hoá",
                docNumber: "3310/QĐ-BYT",
                issueDate: "29/07/2019",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3310-QD-BYT-2019-huong-dan-chan-doan-dieu-tri-benh-viem-gan-vi-rut-B-419819.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị bệnh về thận - tiết niệu",
                category: "Thận - Tiết niệu",
                docNumber: "3931/QĐ-BYT",
                issueDate: "21/09/2015",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3931-QD-BYT-tai-lieu-chuyen-mon-Huong-dan-chan-doan-dieu-tri-benh-ve-than-tiet-nieu-2015-292501.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị triệu chứng đường tiểu dưới do tăng sinh lành tính tuyến tiền liệt",
                category: "Thận - Tiết niệu",
                docNumber: "1531/QĐ-BYT",
                issueDate: "24/03/2023",
                status: "active",
                documentLink: "https://kcb.vn/tai-lieu/huong-dan-chan-doan-dieu-tri/quyet-dinh-ve-viec-ban-hanh-tai-lieu-chuyen-mon-huong-dan-chan-doan-va-dieu-tri-trieu-chung-duong-tieu-duoi-do-tang-sinh.html",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị bệnh thần kinh đái tháo đường",
                category: "Thần kinh",
                docNumber: "3510/QĐ-BYT",
                issueDate: "11/11/2025",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3510-QD-BYT-2025-tai-lieu-Huong-dan-chan-doan-va-dieu-tri-benh-than-kinh-dai-thao-duong-680781.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị chuyên ngành cơ xương khớp",
                category: "Cơ xương khớp",
                docNumber: "361/QĐ-BYT",
                issueDate: "25/01/2014",
                status: "active",
                documentLink: "https://kcb.vn/phac-do/huong-dan-chan-doan-va-dieu-tri-cac-benh-co-xuong-khop.html",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị bệnh Nội tiết - Chuyển hoá",
                category: "Nội tiết - Chuyển hoá",
                docNumber: "3879/QĐ-BYT",
                issueDate: "30/09/2014",
                status: "active",
                documentLink: "https://kcb.vn/thu-vien-tai-lieu/huong-dan-chan-doan-va-dieu-tri-benh-noi-tiet-chuyen-hoa.html",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị tiền đái tháo đường",
                category: "Nội tiết - Chuyển hoá",
                docNumber: "3087/QĐ-BYT",
                issueDate: "16/07/2020",
                status: "active",
                documentLink: "https://kcb.vn/van-ban/quyet-dinh-so-3087-qd-byt-ngay-16-thang-7-nam-2020-ve-viec-ban-hanh-tai-lieu-chuyen-mon-huong-dan-chan-doan-va-dieu-tri-.html",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị bệnh đái tháo đường típ 1 ở trẻ em và thanh thiếu niên",
                category: "Nội tiết - Chuyển hoá",
                docNumber: "1760/QĐ-BYT",
                issueDate: "21/06/2024",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-1760-QD-BYT-2024-tai-lieu-chuyen-mon-chan-doan-benh-dai-thao-duong-tip-1-o-tre-em-614368.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị đái tháo đường típ 2",
                category: "Nội tiết - Chuyển hoá",
                docNumber: "5481/QĐ-BYT",
                issueDate: "30/12/2020",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-5481-QD-BYT-2020-tai-lieu-chuyen-mon-Huong-dan-chan-doan-dieu-tri-dai-thao-duong-tip-2-460925.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị loét bàn chân do đái tháo đường",
                category: "Nội tiết - Chuyển hoá",
                docNumber: "1530/QĐ-BYT",
                issueDate: "24/03/2023",
                status: "active",
                documentLink: "https://kcb.vn/tai-lieu/huong-dan-chan-doan-dieu-tri/quyet-dinh-so-1530-qd-byt-ngay-24-3-2023-ve-viec-ban-hanh-tai-lieu-chuyen-mon-huong-dan-chan-doan-dieu-tri-loet-ban-chan.html",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị các bệnh về mắt",
                category: "Mắt",
                docNumber: "40/QĐ-BYT",
                issueDate: "12/01/2015",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-40-QD-BYT-tai-lieu-chuyen-mon-Huong-dan-chan-doan-va-dieu-tri-cac-benh-ve-mat-263803.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị một số bệnh về Răng Hàm Mặt",
                category: "Răng Hàm Mặt",
                docNumber: "3108/QĐ-BYT",
                issueDate: "28/07/2015",
                status: "active",
                documentLink: "https://kcb.vn/phac-do/huong-dan-chan-doan-va-dieu-tri-mot-so-benh-ve-rang-ham-mat.html",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị bệnh về tai mũi họng",
                category: "Tai mũi họng",
                docNumber: "5643/QĐ-BYT",
                issueDate: "31/12/2015",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-5643-QD-BYT-2015-tai-lieu-chuyen-mon-Huong-dan-chan-doan-dieu-tri-benh-tai-mui-hong-350467.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị các bệnh Da liễu",
                category: "Da liễu",
                docNumber: "4416/QĐ-BYT",
                issueDate: "06/12/2023",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-4416-QD-BYT-2023-Huong-dan-Chan-doan-va-dieu-tri-cac-benh-Da-lieu-590054.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị một số rối loạn tâm thần thường gặp",
                category: "Tâm thần",
                docNumber: "2058/QĐ-BYT",
                issueDate: "14/05/2020",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-2058-QD-BYT-2020-tai-lieu-Huong-dan-chan-doan-dieu-tri-roi-loan-tam-than-thuong-gap-442583.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị COVID-19",
                category: "Truyền nhiễm",
                docNumber: "2671/QĐ-BYT",
                issueDate: "26/06/2023",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-2671-QD-BYT-2023-Huong-dan-chan-doan-va-dieu-tri-COVID19-570917.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị chuyên ngành Phục hồi chức năng",
                category: "Phục hồi chức năng",
                docNumber: "3109/QĐ-BYT",
                issueDate: "19/08/2014",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3109-QD-BYT-2014-tai-lieu-chan-doan-dieu-tri-chuyen-nganh-Phuc-hoi-chuc-nang-Bo-Y-te-248309.aspx",
                type: "treatment"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị bệnh theo Y học cổ truyền, kết hợp y học cổ truyền với y học hiện đại",
                category: "Y học cổ truyền",
                docNumber: "5013/QĐ-BYT",
                issueDate: "01/12/2020",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-5013-QD-BYT-2020-chan-doan-va-dieu-tri-benh-theo-y-hoc-co-truyen-458502.aspx",
                type: "treatment"
            },
            {
                title: "Quy trình kỹ thuật chuyên ngành y học cổ truyền",
                category: "Y học cổ truyền",
                docNumber: "5480/QĐ-BYT",
                issueDate: "30/12/2020",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-5480-QD-BYT-2020-tai-lieu-Huong-dan-Quy-trinh-ky-thuat-chuyen-nganh-y-hoc-co-truyen-460982.aspx?dll=true",
                type: "procedure"
            },
            {
                title: "Danh mục kỹ thuật trong khám bệnh, chữa bệnh",
                category: "Danh mục kỹ thuật",
                docNumber: "23/2024/TT-BYT",
                issueDate: "18/10/2024",
                status: "active",
                documentLink: "https://vanban.chinhphu.vn/?pageid=27160&docid=211508&classid=1&orggroupid=4",
                type: "other"
            },
            {
                title: "Quy định chi tiết một số điều của Luật Khám bệnh, chữa bệnh",
                category: "Luật Khám, chữa bệnh",
                docNumber: "32/2023/TT-BYT",
                issueDate: "31/12/2023",
                status: "active",
                documentLink: "https://bvdaihoccoso3.com.vn/thong-tu-32-2023-ttbyt-luat-kham-benh-chua-benh-2023/",
                type: "other"
            },
            {
                title: "Hướng dẫn chẩn đoán và điều trị bệnh theo y học cổ truyền, kết hợp y học cổ truyền với y học hiện đại - Tập II",
                category: "Y học cổ truyền",
                docNumber: "3991/QĐ-BYT",
                issueDate: "29/12/2025",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3991-QD-BYT-2025-Tai-lieu-Huong-dan-dieu-tri-benh-theo-y-hoc-co-truyen-tap-II-686959.aspx",
                type: "treatment"
            },
	    {
                title: "Hướng dẫn quy trình kỹ thuật chuyên ngành y học cổ truyền",
                category: "Y học cổ truyền",
                docNumber: "486/QĐ-BYT",
                issueDate: "13/02/2026",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-486-QD-BYT-2026-Tai-lieu-Huong-dan-quy-trinh-ky-thuat-chuyen-nganh-y-hoc-co-truyen-695324.aspx",
                type: "procedure"
            },
	    {
                title: "Hướng dẫn quy trình kỹ thuật về Phục hồi chức năng - Tập 1",
                category: "Phục hồi chức năng",
                docNumber: "3553/QĐ-BYT",
                issueDate: "14/11/2025",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3553-QD-BYT-2025-Tai-lieu-Huong-dan-quy-trinh-ky-thuat-ve-Phuc-hoi-chuc-nang-Tap-1-680785.aspx",
                type: "procedure"
            },
	    {
                title: "Hướng dẫn quy trình kỹ thuật về Phục hồi chức năng - Tập 2",
                category: "Phục hồi chức năng",
                docNumber: "3554/QĐ-BYT",
                issueDate: "14/11/2025",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3554-QD-BYT-2025-Tai-lieu-Huong-dan-quy-trinh-ky-thuat-ve-Phuc-hoi-chuc-nang-Tap-2-680784.aspx",
                type: "procedure"
            },
	    {
                title: "Hướng dẫn quy trình kỹ thuật về Phục hồi chức năng - Tập 3",
                category: "Phục hồi chức năng",
                docNumber: "3555/QĐ-BYT",
                issueDate: "14/11/2025",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-3555-QD-BYT-2025-Huong-dan-quy-trinh-ky-thuat-ve-Phuc-hoi-chuc-nang-Tap-3-680786.aspx",
                type: "procedure"
            },
	    {
                title: "Quy định trình tự, thủ tục giám định chi phí khám bệnh, chữa bệnh bảo hiểm y tế, biểu mẫu tổng hợp thanh toán, quyết toán và hướng dẫn Nghị định 188/2025/NĐ-CP hướng dẫn Luật Bảo hiểm y tế",
                category: "Bảo hiểm y tế",
                docNumber: "12/2026/TT-BTC",
                issueDate: "10/02/2026",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/Bao-hiem/Thong-tu-12-2026-TT-BTC-thu-tuc-giam-dinh-chi-phi-kham-chua-benh-bao-hiem-y-te-694954.aspx",
                type: "other"
            },
	    {
                title: "Hướng dẫn lập dự kiến chi, điều chỉnh dự kiến chi khám bệnh, chữa bệnh bảo hiểm y tế và việc xác định số chi khám bệnh, chữa bệnh bảo hiểm y tế vượt dự kiến chi được Quỹ Bảo hiểm y tế thanh toán",
                category: "Bảo hiểm y tế",
                docNumber: "582/QĐ-BYT",
                issueDate: "09/03/2026",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-582-QD-BYT-2026-Tai-lieu-huong-dan-lap-du-kien-chi-kham-chua-benh-bao-hiem-y-te-696935.aspx",
                type: "other"
            },
	    {
                title: "Luật Bảo hiểm y tế sửa đổi 2024",
                category: "Bảo hiểm y tế",
                docNumber: "51/2024/QH15",
                issueDate: "27/11/2024",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/Bao-hiem/Luat-Bao-hiem-y-te-sua-doi-2024-505750.aspx",
                type: "other"
            },
	    {
                title: "Quy định chi tiết và hướng dẫn thi hành một số điều của Luật Bảo hiểm y tế",
                category: "Bảo hiểm y tế",
                docNumber: "01/2025/TT-BYT",
                issueDate: "01/01/2025",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/Bao-hiem/Thong-tu-01-2025-TT-BYT-huong-dan-Luat-Bao-hiem-y-te-623659.aspx",
                type: "other"
            },
	    {
                title: "Quy định chi tiết và hướng dẫn thi hành một số điều của Luật Bảo hiểm y tế",
                category: "Bảo hiểm y tế",
                docNumber: "188/2025/NĐ-CP",
                issueDate: "01/07/2025",
                status: "active",
                documentLink: "https://thuvienphapluat.vn/van-ban/Bao-hiem/Nghi-dinh-188-2025-ND-CP-huong-dan-Luat-Bao-hiem-y-te-641049.aspx",
                type: "other"
            }
        ];

        // Tự động thêm ID cho tất cả các văn bản
        const guideData = rawGuideData.map((item, index) => ({
            ...item,
            id: index + 1 // ID tự động từ 1 đến 29
        }));

        // Hàm kiểm tra xem văn bản có phải là mới không (ban hành trong năm hiện tại)
        function isNewDocument(issueDate) {
            if (!issueDate) return false;
            const issueYear = parseInt(issueDate.split('/')[2]);
            return issueYear === currentYear;
        }

        // Hàm chuyển đổi ngày "dd/mm/yyyy" thành timestamp
        function parseDateString(dateString) {
            if (!dateString) return 0;
            try {
                const parts = dateString.split('/');
                if (parts.length === 3) {
                    const day = parseInt(parts[0], 10);
                    const month = parseInt(parts[1], 10) - 1;
                    const year = parseInt(parts[2], 10);
                    return new Date(year, month, day).getTime();
                }
            } catch (error) {
                console.warn("Lỗi chuyển đổi ngày:", dateString);
            }
            return 0;
        }

        // Chuẩn hóa và sắp xếp dữ liệu theo ngày (mới nhất đầu tiên)
        function normalizeAndSortData() {
            // 1. Chuẩn hóa các ngày thiếu số 0
            guideData.forEach(item => {
                if (item.issueDate) {
                    const parts = item.issueDate.split('/');
                    if (parts.length === 3) {
                        // Thêm số 0 cho tháng nếu cần
                        if (parts[1].length === 1) {
                            parts[1] = '0' + parts[1];
                        }
                        item.issueDate = parts.join('/');
                        item.sortDate = parseDateString(item.issueDate);
                    }
                }
            });
            
            // 2. Sắp xếp toàn bộ guideData theo ngày (mới nhất trước)
            guideData.sort((a, b) => {
                const dateA = parseDateString(a.issueDate);
                const dateB = parseDateString(b.issueDate);
                return dateB - dateA; // Mới nhất trước
            });
        }

        // Dữ liệu câu trả lời cho chatbox
        const chatResponses = {
            "Cách tìm hướng đoán theo số ký hiệu?": "Bạn có thể tìm hướng dẫn theo số ký hiệu bằng cách:\n1. Sử dụng ô tìm kiếm nâng cao\n2. Nhập số ký hiệu vào ô 'Số ký hiệu'\n3. Nhấn 'Tìm kiếm' để xem kết quả",
            "Làm sao biết hướng dẫn còn hiệu lực?": "Để kiểm tra tình trạng hiệu lực của hướng dẫn:\n1. Xem badge màu sắc trên thẻ hướng dẫn\n   - Xanh: Còn hiệu lực\n   - Đỏ: Hết hiệu lực\n2. Văn bản mới có badge NEW màu vàng lấp lánh",
            "Có hướng dẫn nào về COVID-19 không?": "Có, chúng tôi có hướng dẫn cập nhật về COVID-19:\n1. Tìm kiếm 'COVID-19' trong ô tìm kiếm chính\n2. Lọc theo chuyên khoa 'Truyền nhiễm'\n3. Xem hướng dẫn số 4567/QĐ-BYT ban hành ngày 30/07/2023",
            "Tôi cần hỗ trợ về tìm kiếm nâng cao": "Tìm kiếm nâng cao cho phép bạn:\n1. Tìm theo số ký hiệu văn bản\n2. Lọc theo chuyên khoa\n3. Lọc theo tình trạng hiệu lực\n4. Lọc theo năm ban hành\nSử dụng kết hợp các bộ lọc để thu hẹp kết quả tìm kiếm",
            "Làm thế nào để tải văn bản chính thức?": "Để tải văn bản chính thức:\n1. Nhấn vào liên kết tiêu đề văn bản\n2. Bạn sẽ được chuyển đến trang chính thức của Bộ Y tế\n3. Tại đó bạn có thể tải về bản PDF đầy đủ",
            "Hướng dẫn về bệnh tim mạch mới nhất": "Các hướng dẫn mới nhất về tim mạch:\n1. Hướng dẫn chẩn đoán và điều trị tăng huyết áp 2025 (1234/QĐ-BYT)\n2. Xử trí cơn đau thắt ngực (7890/QĐ-BYT)\n3. Hướng dẫn chẩn đoán và điều trị suy tim (9012/QĐ-BYT)",
            "Văn bản về điều trị đái tháo đường": "Các văn bản về đái tháo đường:\n1. Quản lý đái tháo đường type 2 (2345/QĐ-BYT)\n2. Điều trị rối loạn lipid máu (8901/QĐ-BYT)\nSử dụng bộ lọc chuyên khoa 'Nội tiết' để xem thêm",
            "Hướng dẫn chẩn đoán viêm phổi": "Hướng dẫn về viêm phổi:\n1. Chẩn đoán và điều trị viêm phổi cộng đồng (3456/QĐ-BYT)\n2. Quản lý bệnh phổi tắc nghẽn mạn tính (0123/QĐ-BYT)\n3. Xử trí cơn hen phế quản cấp (2223/QĐ-BYT)",
            "Văn bản về điều trị sốt xuất huyết": "Hướng dẫn về sốt xuất huyết:\n1. Điều trị sốt xuất huyết Dengue (1523/QĐ-BYT)\n2. Xử trí ngộ độc cấp (1823/QĐ-BYT)\nSử dụng bộ lọc chuyên khoa 'Truyền nhiễm' để xem thêm"
        };

        // Biến toàn cục cho phân trang
        let currentPage = 1;
        const itemsPerPage = 15;
        let currentData = [];
        let currentDocumentType = "treatment";

        // Hàm đồng bộ TẤT CẢ filter - CỐT LÕI
        function syncAllFilters() {
            const searchTerm = document.getElementById('mainSearch').value.toLowerCase().trim();
            const activeCategory = document.querySelector('.category-list a.active').getAttribute('data-category');
            const activeStatus = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            
            // 1. Lọc theo TAB hiện tại
            currentData = guideData.filter(guide => guide.type === currentDocumentType);
            
            // 2. Lọc theo SIDEBAR (chuyên khoa)
            if (activeCategory !== 'all') {
                currentData = currentData.filter(guide => guide.category === activeCategory);
            }
            
            // 3. Lọc theo TÌM KIẾM
            if (searchTerm) {
                currentData = currentData.filter(guide => 
                    guide.title.toLowerCase().includes(searchTerm) ||
                    guide.docNumber.toLowerCase().includes(searchTerm) ||
                    guide.category.toLowerCase().includes(searchTerm)
                );
            }
            
            // 4. Lọc theo TRẠNG THÁI
            if (activeStatus === 'active') {
                currentData = currentData.filter(guide => guide.status === 'active');
            } else if (activeStatus === 'expired') {
                currentData = currentData.filter(guide => guide.status === 'expired');
            } else if (activeStatus === 'latest') {
                currentData = currentData.filter(guide => isNewDocument(guide.issueDate));
            }
            
            // 5. SẮP XẾP theo ngày (mới nhất đầu tiên) - LUÔN ÁP DỤNG
            currentData.sort((a, b) => {
                const dateA = parseDateString(a.issueDate);
                const dateB = parseDateString(b.issueDate);
                return dateB - dateA; // Mới nhất trước
            });
            
            currentPage = 1;
            renderPage();
        }

        // Khởi tạo trang
        document.addEventListener('DOMContentLoaded', function() {
            // Chuẩn hóa và sắp xếp dữ liệu trước
            normalizeAndSortData();
            
            // Khởi tạo dữ liệu ban đầu
            currentData = guideData.filter(guide => guide.type === currentDocumentType);
            
            renderPage();
            setupEventListeners();
            createSnowflakes();
            checkScreenSize();
        });

        // Tạo hiệu ứng tuyết rơi
        function createSnowflakes() {
            const snowContainer = document.getElementById('snow');
            const snowflakeCount = 15;
            
            for (let i = 0; i < snowflakeCount; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                
                const size = Math.random() * 5 + 2;
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                snowflake.style.left = `${Math.random() * 100}%`;
                
                const duration = Math.random() * 10 + 5;
                snowflake.style.animationDuration = `${duration}s`;
                snowflake.style.animationDelay = `${Math.random() * 5}s`;
                
                snowContainer.appendChild(snowflake);
            }
        }

        // Kiểm tra kích thước màn hình
        function checkScreenSize() {
            const advancedSearchCloseBtn = document.getElementById('advancedSearchClose');
            const isMobile = window.innerWidth <= 768;
            advancedSearchCloseBtn.style.display = isMobile ? 'flex' : 'none';
        }

        // Render trang với phân trang
        function renderPage() {
            renderTable(getCurrentPageData());
            renderPagination();
        }

        // Lấy dữ liệu cho trang hiện tại
        function getCurrentPageData() {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return currentData.slice(startIndex, endIndex);
        }

        // Render bảng
        function renderTable(data) {
            const container = document.getElementById('tableBody');
            container.innerHTML = '';
            
            if (data.length === 0) {
                container.innerHTML = '<div class="no-results" style="text-align: center; padding: 10px; color: #666; font-size: 1.5rem;"><i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 10px; color: #aaa;"></i><h4 style="margin: 0 0 5px 0; font-size: 1.2rem; color: #333;">Không tìm thấy kết quả</h4><p style="margin: 0; font-size: 0.9rem; color: #666;">Không có bệnh nào phù hợp với từ khóa tìm kiếm của bạn.</p></div>';
                return;
            }
            
            data.forEach(guide => {
                let statusText = "";
                let statusClass = "";
                
                if (guide.status === "active") {
                    statusText = "Còn hiệu lực";
                    statusClass = "status-active";
                } else if (guide.status === "expired") {
                    statusText = "Hết hiệu lực";
                    statusClass = "status-expired";
                }
                
                const isNew = isNewDocument(guide.issueDate);
                
                const row = document.createElement('div');
                row.className = 'table-row';
                row.innerHTML = `
                    <div class="table-col">
                        <a href="${guide.documentLink}" target="_blank" class="title-link">
                            ${guide.title}${isNew ? '<span class="new-badge">NEW</span>' : ''}
                        </a>
                    </div>
                    <div class="table-col">
                        <span class="doc-number">${guide.docNumber}</span>
                    </div>
                    <div class="table-col">${guide.category}</div>
                    <div class="table-col">${guide.issueDate}</div>
                    <div class="table-col">
                        <span class="status-badge ${statusClass}">${statusText}</span>
                    </div>
                `;
                container.appendChild(row);
            });
        }

        // Render phân trang
        function renderPagination() {
            const totalPages = Math.ceil(currentData.length / itemsPerPage);
            const pagination = document.getElementById('pagination');
            
            if (totalPages <= 1) {
                pagination.innerHTML = '';
                return;
            }
            
            let paginationHTML = '';
            
            // Nút Về đầu
            paginationHTML += currentPage > 1 
                ? `<button class="page-btn" data-page="1"><i class="fas fa-angle-double-left"></i> Đầu</button>`
                : `<button class="page-btn disabled"><i class="fas fa-angle-double-left"></i> Đầu</button>`;
            
            // Nút Previous
            paginationHTML += currentPage > 1 
                ? `<button class="page-btn" data-page="${currentPage - 1}"><i class="fas fa-chevron-left"></i></button>`
                : `<button class="page-btn disabled"><i class="fas fa-chevron-left"></i></button>`;
            
            // Các nút trang
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, currentPage + 2);
            
            for (let i = startPage; i <= endPage; i++) {
                if (i === currentPage) {
                    paginationHTML += `<button class="page-btn active">${i}</button>`;
                } else {
                    paginationHTML += `<button class="page-btn" data-page="${i}">${i}</button>`;
                }
            }
            
            // Nút Next
            paginationHTML += currentPage < totalPages 
                ? `<button class="page-btn" data-page="${currentPage + 1}"><i class="fas fa-chevron-right"></i></button>`
                : `<button class="page-btn disabled"><i class="fas fa-chevron-right"></i></button>`;
            
            // Nút Về cuối
            paginationHTML += currentPage < totalPages 
                ? `<button class="page-btn" data-page="${totalPages}">Cuối <i class="fas fa-angle-double-right"></i></button>`
                : `<button class="page-btn disabled">Cuối <i class="fas fa-angle-double-right"></i></button>`;
            
            // Thông tin trang
            paginationHTML += `<div class="page-info">Trang ${currentPage} / ${totalPages}</div>`;
            
            pagination.innerHTML = paginationHTML;
            
            // Thêm event listeners cho các nút phân trang
            document.querySelectorAll('.page-btn:not(.disabled)').forEach(button => {
                button.addEventListener('click', function() {
                    const page = parseInt(this.getAttribute('data-page'));
                    if (page) {
                        currentPage = page;
                        renderPage();
                    }
                });
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Tìm kiếm chính
            document.getElementById('mainSearchBtn').addEventListener('click', syncAllFilters);
            document.getElementById('mainSearch').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') syncAllFilters();
            });
            
            // Toggle tìm kiếm nâng cao
            document.getElementById('advancedSearchToggle').addEventListener('click', toggleAdvancedSearch);
            document.getElementById('advancedSearchClose').addEventListener('click', closeAdvancedSearch);
            
            // Bộ lọc nâng cao
            document.getElementById('applyFilters').addEventListener('click', applyAdvancedFilters);
            document.getElementById('resetFilters').addEventListener('click', resetFilters);
            
            // Lọc theo danh mục
            document.querySelectorAll('.category-list a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelectorAll('.category-list a').forEach(item => {
                        item.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    syncAllFilters();
                });
            });
            
            // Lọc theo nút filter
            document.querySelectorAll('.filter-btn').forEach(button => {
                button.addEventListener('click', function() {
                    document.querySelectorAll('.filter-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    syncAllFilters();
                });
            });
            
            // Chuyển đổi loại văn bản
            document.querySelectorAll('.document-type-tab').forEach(tab => {
                tab.addEventListener('click', function() {
                    document.querySelectorAll('.document-type-tab').forEach(t => {
                        t.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    const type = this.getAttribute('data-type');
                    switchDocumentType(type);
                });
            });
            
            // Chatbox
            document.getElementById('chatboxToggle').addEventListener('click', toggleChatbox);
            document.getElementById('closeChatbox').addEventListener('click', toggleChatbox);
            document.getElementById('chatSend').addEventListener('click', sendMessage);
            document.getElementById('chatInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') sendMessage();
            });
            
            // Quick questions
            document.querySelectorAll('.quick-question').forEach(question => {
                question.addEventListener('click', function() {
                    const questionText = this.getAttribute('data-question');
                    document.getElementById('chatInput').value = questionText;
                    sendMessage();
                });
            });
            
            // Đóng tìm kiếm nâng cao khi click ra ngoài
            document.addEventListener('click', function(event) {
                const advancedSearch = document.getElementById('advancedSearch');
                const advancedSearchToggle = document.getElementById('advancedSearchToggle');
                
                if (advancedSearch.classList.contains('active') && 
                    !advancedSearch.contains(event.target) && 
                    !advancedSearchToggle.contains(event.target) &&
                    window.innerWidth <= 768) {
                    closeAdvancedSearch();
                }
            });
            
            // Responsive
            window.addEventListener('resize', checkScreenSize);
        }

        // Chuyển đổi loại văn bản - FIX: GIỮ TÌM KIẾM
        function switchDocumentType(type) {
            currentDocumentType = type;
            
            // Cập nhật tiêu đề
            let titleText = "";
            switch(type) {
                case "treatment": titleText = "Hướng dẫn Chẩn đoán và điều trị - Bộ Y tế"; break;
                case "procedure": titleText = "Quy trình kỹ thuật - Bộ Y tế"; break;
                case "other": titleText = "Văn bản khác"; break;
            }
            document.getElementById('documentTypeTitle').textContent = titleText;
            
            // QUAN TRỌNG: KHÔNG reset ô tìm kiếm, KHÔNG reset sidebar
            // Chỉ reset các phần KHÔNG liên quan:
            document.getElementById('docNumberSearch').value = '';
            document.getElementById('categoryFilter').value = '';
            document.getElementById('statusFilter').value = '';
            document.getElementById('yearFilter').value = '';
            
            // Đóng tìm kiếm nâng cao
            const advancedSearch = document.getElementById('advancedSearch');
            if (advancedSearch.classList.contains('active')) {
                advancedSearch.classList.remove('active');
            }
            
            // Gọi sync - sẽ áp dụng tất cả filter hiện tại (bao gồm tìm kiếm)
            syncAllFilters();
        }

        // Tìm kiếm nâng cao
        function toggleAdvancedSearch() {
            const advancedSearch = document.getElementById('advancedSearch');
            const isActive = advancedSearch.classList.contains('active');
            
            if (isActive) {
                closeAdvancedSearch();
            } else {
                openAdvancedSearch();
            }
        }

        function openAdvancedSearch() {
            const advancedSearch = document.getElementById('advancedSearch');
            advancedSearch.classList.add('active');
            
            if (window.innerWidth <= 768) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function closeAdvancedSearch() {
            const advancedSearch = document.getElementById('advancedSearch');
            advancedSearch.classList.remove('active');
        }

        // Tìm kiếm nâng cao - FIX: KẾT HỢP VỚI FILTER HIỆN TẠI
        function applyAdvancedFilters() {
            const docNumber = document.getElementById('docNumberSearch').value.toLowerCase().trim();
            const category = document.getElementById('categoryFilter').value;
            const status = document.getElementById('statusFilter').value;
            const year = document.getElementById('yearFilter').value;
            
            // Bắt đầu với filter hiện tại (tab + sidebar + search cơ bản)
            syncAllFilters();
            
            // Áp dụng thêm filter nâng cao
            if (docNumber) {
                currentData = currentData.filter(guide => 
                    guide.docNumber.toLowerCase().includes(docNumber)
                );
            }
            
            if (category) {
                currentData = currentData.filter(guide => guide.category === category);
            }
            
            if (status) {
                currentData = currentData.filter(guide => guide.status === status);
            }
            
            if (year) {
                currentData = currentData.filter(guide => 
                    guide.issueDate.includes(year)
                );
            }
            
            // Sắp xếp lại theo ngày
            currentData.sort((a, b) => {
                const dateA = parseDateString(a.issueDate);
                const dateB = parseDateString(b.issueDate);
                return dateB - dateA;
            });
            
            currentPage = 1;
            renderPage();
            
            if (window.innerWidth <= 768) {
                closeAdvancedSearch();
            }
        }

        function resetFilters() {
            document.getElementById('docNumberSearch').value = '';
            document.getElementById('categoryFilter').value = '';
            document.getElementById('statusFilter').value = '';
            document.getElementById('yearFilter').value = '';
            
            // Trở về filter hiện tại (tab + sidebar + search)
            syncAllFilters();
        }

        // Chatbox functions
        function toggleChatbox() {
            const chatbox = document.getElementById('chatbox');
            const isOpen = chatbox.classList.contains('open');
            
            if (isOpen) {
                chatbox.classList.remove('open');
            } else {
                chatbox.classList.add('open');
                setTimeout(() => {
                    document.getElementById('chatInput').focus();
                }, 300);
            }
        }

        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (message) {
                addMessage(message, 'user');
                input.value = '';
                
                setTimeout(() => {
                    let response = "Xin lỗi, tôi không hiểu câu hỏi của bạn. Vui lòng thử lại hoặc chọn một trong các câu hỏi gợi ý bên dưới.";
                    
                    for (const [question, answer] of Object.entries(chatResponses)) {
                        if (message.toLowerCase().includes(question.toLowerCase().substring(0, 10))) {
                            response = answer;
                            break;
                        }
                    }
                    
                    addMessage(response, 'bot');
                }, 1000);
            }
            
            input.focus();
        }

        function addMessage(text, sender) {
            const chatboxBody = document.getElementById('chatboxBody');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            
            const lines = text.split('\n');
            lines.forEach((line, index) => {
                if (index > 0) {
                    messageDiv.appendChild(document.createElement('br'));
                }
                messageDiv.appendChild(document.createTextNode(line));
            });
            
            chatboxBody.appendChild(messageDiv);
            chatboxBody.scrollTop = chatboxBody.scrollHeight;
        }