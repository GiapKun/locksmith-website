import Image from "next/image";

export const metadata = {
  title: "Sửa Khóa Tủ Chuyên Nghiệp | An Toàn & Bảo Mật",
  description:
    "Dịch vụ sửa khóa tủ chuyên nghiệp, uy tín. Sửa chữa, thay thế, mở khóa cho mọi loại tủ gỗ, tủ sắt, tủ đồ, đảm bảo an toàn tuyệt đối.",
};

export default function SuaKhoaTuPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center relative overflow-hidden shadow-lg">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-5 left-5 w-24 h-24 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-5 right-5 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-1/3 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Sửa Khóa Tủ: Giải Pháp Bảo Vệ Tài Sản Cá Nhân Hiệu Quả
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Dịch vụ sửa khóa tủ chuyên nghiệp, nhanh chóng, bảo mật. Sửa chữa,
            thay thế, mở khóa cho mọi loại tủ văn phòng, tủ quần áo, tủ hồ sơ
            đảm bảo an toàn cho tài sản của bạn.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="mb-10">
              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/khoatu1.png"
                  alt="Các loại khóa ô tô"
                  fill
                  className="object-cover md:object-contain"
                  priority
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Khóa tủ đóng vai trò quan trọng trong việc bảo vệ tài sản, tài
                liệu và đồ dùng cá nhân của bạn. Sự cố với khóa tủ có thể gây ra
                nhiều bất tiện trong cuộc sống hàng ngày và công việc. Chúng tôi
                cung cấp dịch vụ sửa khóa tủ chuyên nghiệp, xử lý mọi vấn đề từ
                đơn giản đến phức tạp.
              </p>
              <p className="text-lg text-gray-700">
                Bài viết này sẽ cung cấp thông tin về các vấn đề thường gặp với
                khóa tủ, cách nhận biết hư hỏng và khi nào cần đến sự hỗ trợ của
                chuyên gia. Chúng tôi cam kết mang đến giải pháp an toàn và hiệu
                quả cho mọi nhu cầu của bạn.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-10 bg-yellow-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-yellow-600">
                Mục Lục
              </h2>
              <ul className="space-y-2">
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#common-issues"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    1. Các vấn đề thường gặp với khóa tủ
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#troubleshooting"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    2. Dấu hiệu nhận biết khóa tủ gặp sự cố
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#expert-help"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    3. Khi nào cần gọi thợ sửa khóa chuyên nghiệp
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    4. Dịch vụ sửa khóa tủ của chúng tôi
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Common Issues */}
            <div id="common-issues" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                1. Các vấn đề thường gặp với khóa tủ
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Khóa tủ bị kẹt không xoay được
              </h3>
              <p className="text-gray-700 mb-4">
                Đây là vấn đề phổ biến nhất với khóa tủ. Nguyên nhân có thể do
                cơ chế khóa bị gỉ sét, bụi bẩn tích tụ lâu ngày, chìa khóa không
                phù hợp hoặc bộ phận lò xo bên trong bị hỏng. Đôi khi do lỗi lắp
                đặt ban đầu khiến khóa không khớp với vị trí.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Không thể rút chìa khóa ra
              </h3>
              <p className="text-gray-700 mb-4">
                Tình trạng này thường xảy ra khi bộ phận chốt giữ chìa bị hỏng,
                hoặc chìa khóa bị biến dạng nhẹ. Đôi khi do bụi bẩn làm tắc
                nghẽn ổ khóa hoặc do chìa khóa không đặt đúng vị trí để có thể
                rút ra.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Chìa khóa gãy trong ổ khóa
              </h3>
              <p className="text-gray-700 mb-4">
                Đây là tình huống khá nghiêm trọng và thường xảy ra khi chìa
                khóa làm từ vật liệu kém chất lượng, hoặc do cố dùng lực quá
                mạnh khi khóa bị kẹt. Khi chìa gãy trong ổ, việc tự ý lấy ra có
                thể làm hỏng thêm ổ khóa.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Khóa số bị quên mã hoặc lỗi
              </h3>
              <p className="text-gray-700 mb-4">
                Đối với các loại tủ dùng khóa số, việc quên mã số hoặc khóa bị
                lỗi hệ thống là vấn đề thường gặp. Đôi khi pin yếu (với khóa
                điện tử) cũng có thể khiến khóa không hoạt động chính xác.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Khóa tủ bị lỏng hoặc rơi ra
              </h3>
              <p className="text-gray-700 mb-4">
                Sau thời gian dài sử dụng, các ốc vít cố định khóa có thể bị
                lỏng khiến toàn bộ bộ khóa rơi ra khỏi cánh tủ. Vấn đề này
                thường gặp ở tủ gỗ hoặc tủ có kết cấu không chắc chắn.
              </p>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/khoatu2.png"
                  alt="Các loại khóa ô tô"
                  fill
                  className="object-cover md:object-contain"
                  priority
                />
              </div>
            </div>

            {/* Section 2: DIY Repair */}
            <div id="diy-repair" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                2. Hướng dẫn tự khắc phục các vấn đề đơn giản
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Xử lý khóa tủ bị kẹt
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Dầu bôi trơn khóa hoặc bột graphite</li>
                  <li>Tua vít nhỏ</li>
                  <li>Khăn lau sạch</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Lau sạch bên ngoài ổ khóa</li>
                  <li>Nhỏ một lượng nhỏ dầu bôi trơn vào ổ khóa</li>
                  <li>Đưa chìa vào và xoay nhẹ nhàng qua lại nhiều lần</li>
                  <li>Lau sạch dầu thừa bên ngoài</li>
                  <li>Thử mở khóa bình thường</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Khắc phục chìa khóa không rút ra được
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Lưu ý:</strong> Không dùng lực mạnh kẻo làm gãy chìa.
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Xoay chìa khóa nhẹ nhàng qua lại tìm vị trí rút</li>
                  <li>Nhỏ một ít dầu bôi trơn vào rãnh ổ khóa</li>
                  <li>
                    Dùng tua vít nhỏ ấn nhẹ cơ chế giữ chìa (nếu nhìn thấy)
                  </li>
                  <li>
                    Xoay tới đúng vị trí (thường là vị trí 12h) và rút chìa
                  </li>
                  <li>Nếu không được, tránh cố gắng quá mức</li>
                </ol>
                <p className="text-gray-700 mt-2">
                  <strong>Quan trọng:</strong> Nếu làm theo các bước mà vẫn
                  không thể rút chìa, hãy liên hệ thợ khóa chuyên nghiệp.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Xử lý khóa tủ bị lỏng
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Tua vít phù hợp với loại ốc của khóa</li>
                  <li>Ốc vít mới (nếu ốc cũ bị hỏng)</li>
                  <li>Keo dán gỗ (cho tủ gỗ)</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Tháo khóa ra khỏi cánh tủ</li>
                  <li>Kiểm tra các lỗ vít có bị mòn rộng không</li>
                  <li>Với tủ gỗ, có thể bôi keo vào lỗ bị mòn và đợi khô</li>
                  <li>Siết lại các ốc vít cẩn thận</li>
                  <li>Kiểm tra độ chắc chắn của khóa sau khi lắp</li>
                </ol>
              </div>

              <p className="text-gray-700 mt-6 italic">
                <strong>Lưu ý:</strong> Những hướng dẫn trên chỉ phù hợp với các
                vấn đề cơ bản. Với các tình huống phức tạp hơn như chìa gãy
                trong ổ, khóa số bị lỗi, hay khóa tủ an toàn gặp sự cố, bạn nên
                tìm đến thợ sửa khóa chuyên nghiệp.
              </p>
            </div>

            {/* Section 3: Maintenance */}
            <div id="maintenance" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                3. Cách bảo dưỡng khóa tủ định kỳ
              </h2>

              <p className="text-gray-700 mb-4">
                Bảo dưỡng định kỳ giúp kéo dài tuổi thọ và đảm bảo hoạt động
                trơn tru của khóa tủ. Dưới đây là lịch trình bảo dưỡng được
                khuyến nghị:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Tần suất
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Công việc bảo dưỡng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        3 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Bôi trơn ổ khóa bằng dầu chuyên dụng hoặc bột graphite
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        6 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra và siết lại các ốc vít cố định
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        12 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra toàn diện cơ chế khóa, làm sạch bụi bẩn bên
                        trong
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Khi cần
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Thay pin cho khóa điện tử, kiểm tra khi thấy dấu hiệu
                        bất thường
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mẹo bảo quản khóa tủ lâu bền:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>
                  Không dùng dầu nhớt thông thường cho khóa, hãy dùng dầu khóa
                  chuyên dụng
                </li>
                <li>Không lắp khóa quá chặt vào cánh tủ gỗ, dễ gây nứt vỡ</li>
                <li>Không để tủ ở nơi ẩm ướt, dễ gây gỉ sét ổ khóa</li>
                <li>Luôn có chìa khóa dự phòng cất ở nơi an toàn</li>
                <li>Không treo quá nhiều đồ nặng trên chìa khóa tủ</li>
                <li>Với khóa số, thay đổi mã định kỳ và ghi nhớ cẩn thận</li>
              </ul>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/khoatu3.png"
                  alt="Các loại khóa ô tô"
                  fill
                  className="object-cover md:object-contain"
                  priority
                />
              </div>
            </div>

            {/* Section 4: Professional Help */}
            <div id="professional-help" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                4. Khi nào nên gọi thợ sửa khóa chuyên nghiệp
              </h2>

              <p className="text-gray-700 mb-4">
                Mặc dù có thể tự xử lý một số vấn đề đơn giản, nhưng nhiều
                trường hợp cần đến sự trợ giúp của thợ sửa khóa chuyên nghiệp:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-700">
                    Tình huống khẩn cấp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Chìa khóa gãy bên trong ổ khóa</li>
                    <li>Mất hoặc quên mã số khóa tủ quan trọng</li>
                    <li>Khóa bị hỏng hoàn toàn không mở được</li>
                    <li>Cần mở tủ chứa tài liệu quan trọng ngay lập tức</li>
                    <li>Khóa tủ an toàn (két sắt mini) gặp trục trặc</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-700">
                    Vấn đề phức tạp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Cần nâng cấp hệ thống khóa bảo mật cao hơn</li>
                    <li>Khóa bị hỏng cần thay thế hoàn toàn</li>
                    <li>Reset lại khóa điện tử hoặc khóa số</li>
                    <li>Cần làm lại chìa khóa đã mất</li>
                    <li>Lắp đặt cùng loại khóa cho nhiều tủ</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Tiêu chí chọn thợ sửa khóa tủ uy tín:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Có chuyên môn và kinh nghiệm với đa dạng loại khóa tủ</li>
                <li>Có đầy đủ dụng cụ chuyên nghiệp</li>
                <li>Cung cấp bảo hành cho dịch vụ</li>
                <li>Có đánh giá tốt từ khách hàng trước đó</li>
                <li>Minh bạch về chi phí trước khi thực hiện</li>
                <li>Có dịch vụ hỗ trợ khẩn cấp khi cần</li>
              </ul>

              <div className="p-4 bg-yellow-50 rounded-lg mb-6">
                <p className="text-gray-700 mb-2">
                  <strong className="text-yellow-700">
                    Chi phí tham khảo:
                  </strong>{" "}
                  Giá dịch vụ sửa khóa tủ dao động tùy theo loại khóa:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Mở khóa tủ đơn giản: 100.000đ - 300.000đ</li>
                  <li>Sửa chữa khóa tủ cơ học: 150.000đ - 400.000đ</li>
                  <li>Làm lại chìa khóa tủ: 100.000đ - 300.000đ</li>
                  <li>Thay thế khóa tủ mới: 200.000đ - 600.000đ</li>
                  <li>Sửa khóa tủ an toàn, khóa số: 300.000đ - 1.000.000đ</li>
                </ul>
                <p className="text-gray-700 mt-2 italic">
                  Giá có thể cao hơn đối với khóa tủ cao cấp, khóa điện tử hoặc
                  những trường hợp đặc biệt phức tạp.
                </p>
              </div>
            </div>

            {/* Section 5: Lock Types */}
            <div id="lock-types" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                5. Các loại khóa tủ phổ biến
              </h2>

              <p className="text-gray-700 mb-6">
                Hiểu rõ về loại khóa của tủ giúp bạn có phương án bảo dưỡng và
                xử lý sự cố phù hợp:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Loại khóa
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Đặc điểm
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Ưu và nhược điểm
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa chìa cơ bản
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Cấu tạo đơn giản</li>
                          <li>Thường dùng cho tủ gỗ, tủ quần áo</li>
                          <li>Chìa khóa ngắn, nhỏ</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Giá thành rẻ
                        <br />
                        <span className="text-green-600">+</span> Dễ thay thế
                        <br />
                        <span className="text-red-600">-</span> Dễ bị hư hỏng
                        theo thời gian
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa tủ đồng tâm
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Thiết kế hình tròn</li>
                          <li>Dùng cho tủ văn phòng, tủ hồ sơ</li>
                          <li>Cơ chế chốt xoay</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Độ bền cao
                        <br />
                        <span className="text-green-600">+</span> Thiết kế đẹp
                        <br />
                        <span className="text-red-600">-</span> Khó sửa chữa
                        <br />
                        <span className="text-red-600">-</span> Chi phí thay thế
                        cao
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa số cơ học
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Sử dụng mã số để mở</li>
                          <li>Không cần chìa khóa</li>
                          <li>Phổ biến ở tủ đựng đồ công cộng</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Tiện lợi khi
                        không cần mang chìa
                        <br />
                        <span className="text-green-600">+</span> Nhiều người có
                        thể sử dụng
                        <br />
                        <span className="text-red-600">-</span> Dễ quên mã số
                        <br />
                        <span className="text-red-600">-</span> Cơ chế dễ hỏng
                        nếu dùng mạnh tay
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa điện tử
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Sử dụng pin hoặc điện</li>
                          <li>Mở bằng mã số, thẻ từ hoặc vân tay</li>
                          <li>Thường dùng cho tủ có giá trị cao</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Bảo mật cao
                        <br />
                        <span className="text-green-600">+</span> Tiện lợi không
                        cần chìa
                        <br />
                        <span className="text-red-600">-</span> Phụ thuộc
                        pin/điện
                        <br />
                        <span className="text-red-600">-</span> Chi phí sửa chữa
                        đắt
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Lời khuyên khi lựa chọn khóa tủ:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>
                  Tủ đựng đồ quý giá: Nên chọn khóa điện tử hoặc khóa cơ chất
                  lượng cao
                </li>
                <li>
                  Tủ văn phòng: Khóa đồng tâm hoặc khóa số là lựa chọn tốt
                </li>
                <li>
                  Tủ quần áo gia đình: Khóa chìa cơ bản đủ đáp ứng nhu cầu
                </li>
                <li>Nơi ẩm ướt: Chọn khóa inox hoặc chống gỉ</li>
                <li>Lưu ý độ dày và chất liệu cánh tủ khi chọn khóa</li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Kết Luận
              </h2>

              <p className="text-gray-700 mb-4">
                Khóa tủ đóng vai trò quan trọng trong việc bảo vệ tài sản và tài
                liệu cá nhân. Với nhiều loại khóa tủ đa dạng trên thị trường,
                việc lựa chọn, bảo dưỡng và sửa chữa đúng cách sẽ giúp kéo dài
                tuổi thọ và đảm bảo tính an toàn cho tủ của bạn.
              </p>
              <p className="text-gray-700 mb-4">
                Bảo dưỡng định kỳ là biện pháp hiệu quả để phòng ngừa các sự cố
                khóa tủ. Tuy nhiên, khi gặp vấn đề phức tạp như chìa gãy trong
                ổ, quên mã số khóa điện tử, hay cơ chế khóa bị hỏng nặng, hãy
                tìm đến dịch vụ sửa khóa tủ chuyên nghiệp để tránh làm hỏng
                thêm.
              </p>
              <p className="text-gray-700 mb-4">
                Nhiều người thường chủ quan với khóa tủ, nhưng một hệ thống khóa
                chất lượng và hoạt động tốt không chỉ mang lại sự an tâm mà còn
                góp phần bảo vệ những tài sản giá trị và thông tin quan trọng
                của bạn.
              </p>

              <div className="p-4 bg-yellow-50 rounded-lg mt-6">
                <p className="text-gray-700 italic">
                  <strong>Lưu ý:</strong> Thông tin trong bài viết này chỉ mang
                  tính chất tham khảo. Đối với các vấn đề cụ thể về khóa tủ cao
                  cấp, khóa tủ an toàn hay hệ thống khóa đặc biệt, hãy luôn tham
                  khảo ý kiến của thợ khóa chuyên nghiệp để được tư vấn phù hợp.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Câu Hỏi Thường Gặp
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Chi phí thay ổ khóa tủ mới là bao nhiêu?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Chi phí thay ổ khóa tủ mới phụ thuộc vào loại tủ và chất
                      lượng khóa. Khóa tủ cơ bản có giá từ 100.000đ đến
                      300.000đ. Khóa tủ đồng tâm chất lượng tốt giá từ 300.000đ
                      đến 600.000đ. Khóa tủ số cơ học từ 400.000đ đến 800.000đ.
                      Khóa điện tử cao cấp từ 1.000.000đ trở lên. Chi phí này
                      chưa bao gồm công thay lắp, thường từ 100.000đ đến
                      200.000đ tùy độ phức tạp.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Tôi quên mã số khóa tủ, làm cách nào để mở?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khi quên mã số khóa tủ, trước tiên hãy kiểm tra xem có mã
                      mặc định hoặc mã master không (thường được ghi trong sổ
                      hướng dẫn). Với khóa số cơ học, bạn có thể thử một số cách
                      mở như xoay núm lần lượt để tìm số đúng. Tuy nhiên, giải
                      pháp an toàn nhất là gọi thợ khóa chuyên nghiệp. Họ có kỹ
                      thuật và công cụ để mở khóa mà không làm hỏng tủ. Sau khi
                      mở được, nhớ ghi lại mã số mới ở nơi an toàn.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Chìa khóa tủ bị gãy trong ổ phải làm sao?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khi chìa khóa bị gãy trong ổ, đầu tiên đừng cố gắng dùng
                      vật nhọn móc ra vì có thể đẩy mảnh chìa sâu hơn. Nếu đầu
                      chìa còn thò ra ngoài, bạn có thể dùng kìm nhỏ kẹp nhẹ
                      nhàng. Nếu chìa gãy sâu trong ổ, hãy liên hệ thợ khóa
                      chuyên nghiệp ngay. Họ có dụng cụ chuyên dụng để lấy mảnh
                      chìa mà không làm hỏng cơ cấu bên trong. Sau khi lấy được
                      mảnh chìa, nên kiểm tra lại ổ khóa và làm chìa mới.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Khóa tủ điện tử hết pin có mở được không?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Hầu hết các khóa tủ điện tử hiện đại đều có cơ chế dự
                      phòng khi hết pin. Một số loại có cổng sạc khẩn cấp bên
                      ngoài, bạn có thể dùng pin 9V áp vào để cung cấp điện tạm
                      thời và mở khóa. Một số loại khác có chìa khóa cơ học dự
                      phòng, thường được giấu dưới logo hoặc nắp đậy. Kiểm tra
                      sách hướng dẫn để biết vị trí chính xác. Nếu không có cách
                      nào, bạn cần gọi thợ khóa chuyên nghiệp. Để phòng ngừa,
                      hãy thay pin ngay khi thấy tín hiệu pin yếu.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Làm thế nào để bảo vệ khóa tủ khỏi bị gỉ sét?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Để bảo vệ khóa tủ khỏi gỉ sét, hãy thực hiện các biện pháp
                      sau: (1) Bôi trơn ổ khóa định kỳ 3-6 tháng một lần bằng
                      dầu khóa chuyên dụng hoặc bột graphite, (2) Tránh để tủ ở
                      nơi ẩm ướt, (3) Lau khô tay trước khi sử dụng khóa, (4)
                      Đối với khóa tủ ngoài trời, sử dụng bao bọc chống nước,
                      (5) Chọn khóa làm từ vật liệu không gỉ như inox hoặc đồng
                      thau, (6) Dùng các sản phẩm chống gỉ chuyên dụng phun vào
                      ổ khóa. Nếu khóa đã bắt đầu gỉ, hãy xử lý sớm trước khi nó
                      lan rộng và làm kẹt cơ chế khóa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Dịch Vụ Liên Quan
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Khóa Xe Máy
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa, làm chìa khóa xe máy các loại
                  </p>
                  <a
                    href="/sua-khoa-xe"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Khóa Cửa
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa chữa khóa cửa các loại
                  </p>
                  <a
                    href="/sua-khoa-cua"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Khóa Ô Tô
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa, làm chìa khóa xe ô tô các loại
                  </p>
                  <a
                    href="/khoa-o-to"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
