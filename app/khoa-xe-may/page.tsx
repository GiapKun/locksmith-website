export const metadata = {
  title: "Sửa Khóa Xe Máy | Dịch Vụ Chuyên Nghiệp",
  description:
    "Dịch vụ sửa khóa xe máy chuyên nghiệp, uy tín. Khắc phục nhanh mọi sự cố khóa, mang lại sự tiện lợi và an tâm cho bạn.",
};

export default function SuaKhoaXeMayPage() {
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
            Sửa Khóa Xe Máy: Nhanh Chóng - Hiệu Quả - Tin Cậy
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Mọi vấn đề về khóa xe máy của bạn sẽ được giải quyết nhanh chóng và
            chuyên nghiệp. Liên hệ ngay để được hỗ trợ tốt nhất!
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
                <img
                  src="/images/motorbike1.png"
                  alt="Các loại khóa ô tô"
                  className="w-full h-full object-cover md:object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Khóa xe máy là bộ phận quan trọng giúp bảo vệ phương tiện của
                bạn khỏi trộm cắp. Tuy nhiên, sau thời gian sử dụng, khóa xe có
                thể gặp nhiều vấn đề như kẹt, không mở được, chìa khóa bị gãy
                hoặc mất chìa. Bài viết này sẽ cung cấp thông tin toàn diện về
                các sự cố thường gặp và cách xử lý khóa xe máy.
              </p>
              <p className="text-lg text-gray-700">
                Dù bạn đang sử dụng xe số, xe tay ga hay xe phân khối lớn, những
                thông tin dưới đây sẽ giúp bạn hiểu rõ hơn về hệ thống khóa xe
                máy và cách bảo dưỡng chúng hiệu quả.
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
                    1. Các vấn đề thường gặp với khóa xe máy
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#diy-repair"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    2. Hướng dẫn tự sửa khóa xe máy tại nhà
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#maintenance"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    3. Cách bảo dưỡng khóa xe máy định kỳ
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#professional-help"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    4. Khi nào nên gọi thợ sửa khóa xe máy chuyên nghiệp
                  </a>
                </li>
                <li>
                  <a
                    href="#lock-types"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    5. Các loại khóa xe máy phổ biến hiện nay
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Common Issues */}
            <div id="common-issues" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                1. Các vấn đề thường gặp với khóa xe máy
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Khóa xe bị kẹt hoặc khó xoay
              </h3>
              <p className="text-gray-700 mb-4">
                Đây là vấn đề phổ biến nhất với khóa xe máy, thường do bụi bẩn,
                nước mưa lọt vào ổ khóa hoặc thiếu dầu bôi trơn. Đặc biệt với xe
                để ngoài trời, các yếu tố thời tiết có thể làm khóa nhanh hỏng
                hơn.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Chìa khóa bị gãy trong ổ khóa
              </h3>
              <p className="text-gray-700 mb-4">
                Tình trạng này xảy ra khi chìa khóa đã cũ, mòn hoặc khi dùng lực
                quá mạnh để mở khóa. Chìa khóa xe máy thường mỏng hơn chìa khóa
                cửa nên dễ gãy hơn khi bị kẹt.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mất chìa khóa dự phòng
              </h3>
              <p className="text-gray-700 mb-4">
                Nhiều trường hợp chỉ còn một chìa khóa duy nhất, khi mất sẽ rất
                bất tiện. Đặc biệt với các dòng xe đời mới, làm lại chìa khóa
                cần có mã số chìa từ nhà sản xuất.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Hỏng khóa điện (với xe có khóa điện tử)
              </h3>
              <p className="text-gray-700 mb-4">
                Các dòng xe tay ga hiện đại thường tích hợp khóa điện tử có thể
                gặp lỗi về bo mạch, hết pin remote hoặc hỏng cảm biến.
              </p>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/motorbike2.png"
                  alt="Các loại khóa ô tô"
                  className="w-full h-full object-cover md:object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Section 2: DIY Repair */}
            <div id="diy-repair" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                2. Hướng dẫn tự sửa khóa xe máy tại nhà
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Xử lý khóa xe bị kẹt
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>
                    Dầu bôi trơn chuyên dụng cho khóa xe (WD-40 hoặc dầu máy
                    khâu)
                  </li>
                  <li>Khăn lau sạch</li>
                  <li>Bình xịt khí nén (nếu có)</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Dùng bình xịt khí nén thổi sạch bụi bẩn trong ổ khóa</li>
                  <li>Xịt một lượng nhỏ dầu bôi trơn vào ổ khóa</li>
                  <li>Đưa chìa khóa vào và xoay nhẹ nhàng 5-10 lần</li>
                  <li>Lau sạch dầu thừa bên ngoài ổ khóa</li>
                  <li>Thử lại vài lần đến khi khóa vận hành trơn tru</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Làm chìa khóa dự phòng
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Chìa khóa gốc còn tốt</li>
                  <li>Tìm cửa hàng khóa có máy làm chìa xe máy</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Lưu ý quan trọng:</strong>
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Với xe đời mới, cần mang theo mã số chìa (nếu có)</li>
                  <li>
                    Chỉ nên làm tại cửa hàng uy tín để đảm bảo độ chính xác
                  </li>
                  <li>Giá làm chìa thường từ 50.000đ - 200.000đ tùy loại xe</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Thay pin remote khóa điện tử
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Pin mới (thường là pin CR1616, CR2025 hoặc CR2032)</li>
                  <li>Tua vít nhỏ đầu dẹt</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Tìm vị trí nắp pin trên remote (thường ở mặt sau)</li>
                  <li>Dùng tua vít mở nắp pin cẩn thận</li>
                  <li>Thay pin mới đúng chiều cực (+/-)</li>
                  <li>Đóng nắp lại và kiểm tra hoạt động</li>
                </ol>
              </div>

              <p className="text-gray-700 mt-6 italic">
                <strong>Lưu ý:</strong> Những hướng dẫn trên chỉ áp dụng cho các
                vấn đề đơn giản. Đối với các hư hỏng phức tạp như gãy chìa trong
                ổ khóa, hỏng hệ thống khóa điện... nên liên hệ thợ chuyên nghiệp
                để tránh làm hỏng thêm.
              </p>
            </div>

            {/* Section 3: Maintenance */}
            <div id="maintenance" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                3. Cách bảo dưỡng khóa xe máy định kỳ
              </h2>

              <p className="text-gray-700 mb-4">
                Bảo dưỡng khóa xe máy định kỳ giúp kéo dài tuổi thọ và tránh các
                sự cố bất ngờ. Dưới đây là lịch trình bảo dưỡng được khuyến
                nghị:
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
                        Hàng tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra và vệ sinh bề mặt khóa, lau sạch bụi bẩn
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        3 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Bôi trơn ổ khóa bằng dầu chuyên dụng
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        6 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra remote (nếu có), thay pin khi cần
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        12 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra toàn bộ hệ thống khóa, làm chìa dự phòng
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mẹo bảo quản khóa xe máy:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Tránh để xe dưới trời mưa nắng lâu ngày</li>
                <li>Không dùng lực quá mạnh khi xoay khóa</li>
                <li>Với xe có remote, tránh để rơi hoặc va đập mạnh</li>
                <li>Làm 2-3 chìa dự phòng và cất ở nơi an toàn</li>
                <li>Ghi nhớ mã số chìa khóa (nếu có) để làm lại khi cần</li>
              </ul>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/motorbike3.png"
                  alt="Các loại khóa ô tô"
                  className="w-full h-full object-cover md:object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Section 4: Professional Help */}
            <div id="professional-help" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                4. Khi nào nên gọi thợ sửa khóa xe máy chuyên nghiệp
              </h2>

              <p className="text-gray-700 mb-4">
                Có những trường hợp bạn cần sự trợ giúp của thợ khóa xe máy
                chuyên nghiệp để tránh làm hỏng hệ thống khóa:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-700 text-gray-900">
                    Tình huống khẩn cấp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Chìa khóa bị gãy trong ổ khóa</li>
                    <li>Mất toàn bộ chìa khóa</li>
                    <li>Khóa bị kẹt cứng không thể mở</li>
                    <li>Remote bị hỏng không mở được xe</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-700">
                    Vấn đề phức tạp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Cần thay thế toàn bộ ổ khóa</li>
                    <li>Hỏng hệ thống khóa điện tử</li>
                    <li>Làm lại chìa khi không còn chìa mẫu</li>
                    <li>Cài đặt lại remote khóa điện tử</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Cách chọn thợ khóa xe máy uy tín:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Tìm thợ có kinh nghiệm chuyên về khóa xe máy</li>
                <li>Kiểm tra thiết bị máy móc có hiện đại không</li>
                <li>Yêu cầu bảo hành sau khi sửa chữa</li>
                <li>Chọn nơi có dịch vụ di động đến tận nơi</li>
                <li>So sánh giá cả giữa 2-3 đơn vị trước khi quyết định</li>
              </ul>

              <div className="p-4 bg-yellow-50 rounded-lg mb-6">
                <p className="text-gray-700 mb-2">
                  <strong className="text-yellow-700">Lưu ý:</strong> Giá dịch
                  vụ sửa khóa xe máy thường dao động từ 100.000đ - 500.000đ tùy
                  mức độ phức tạp. Thay ổ khóa mới có thể từ 300.000đ -
                  1.500.000đ tùy loại xe. Luôn yêu cầu báo giá trước khi đồng ý
                  sửa chữa.
                </p>
              </div>
            </div>

            {/* Section 5: Lock Types */}
            <div id="lock-types" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                5. Các loại khóa xe máy phổ biến hiện nay
              </h2>

              <p className="text-gray-700 mb-6">
                Hiểu rõ các loại khóa xe máy sẽ giúp bạn sử dụng và bảo dưỡng
                chúng tốt hơn:
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
                        Dòng xe phù hợp
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa cổ điển (xe số)
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Thiết kế đơn giản, dễ sửa chữa</li>
                          <li>Dễ làm chìa khóa</li>
                          <li>Giá thành rẻ</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Xe số các loại
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa tay ga cơ bản
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Khóa tích hợp trên tay ga</li>
                          <li>Độ bảo mật trung bình</li>
                          <li>Dễ bị kẹt khi để ngoài trời</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Xe tay ga đời cũ
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa điện tử (remote)
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Mở khóa bằng remote</li>
                          <li>Bảo mật cao</li>
                          <li>Phụ thuộc vào pin</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Xe tay ga đời mới
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Khóa chống trộm cao cấp
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Chống cắt, chống khoan</li>
                          <li>Có thể tích hợp định vị</li>
                          <li>Giá thành cao</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Xe phân khối lớn, xe đắt tiền
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Lời khuyên khi chọn khóa xe máy:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Với xe thông thường: Nên dùng khóa tiêu chuẩn của hãng</li>
                <li>Xe đắt tiền: Cân nhắc lắp thêm khóa chống trộm</li>
                <li>Luôn làm ít nhất 2 chìa dự phòng</li>
                <li>Với xe remote: Kiểm tra pin định kỳ</li>
                <li>Ghi nhớ mã số khóa để làm lại khi cần</li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Kết Luận
              </h2>

              <p className="text-gray-700 mb-4">
                Khóa xe máy tuy nhỏ nhưng đóng vai trò quan trọng trong việc bảo
                vệ tài sản của bạn. Hiểu rõ cách sử dụng, bảo dưỡng và sửa chữa
                khóa xe sẽ giúp bạn tiết kiệm thời gian, chi phí và tránh những
                rắc rối không đáng có.
              </p>
              <p className="text-gray-700 mb-4">
                Với những hướng dẫn trên, bạn có thể tự xử lý nhiều vấn đề
                thường gặp với khóa xe máy. Tuy nhiên, đừng ngần ngại liên hệ
                thợ chuyên nghiệp khi gặp các tình huống phức tạp. Đầu tư vào hệ
                thống khóa chất lượng và bảo dưỡng định kỳ là cách tốt nhất để
                bảo vệ chiếc xe yêu quý của bạn.
              </p>

              <div className="p-4 bg-yellow-50 rounded-lg mt-6">
                <p className="text-gray-700 italic">
                  <strong>Lưu ý:</strong> Thông tin trong bài viết này chỉ mang
                  tính chất tham khảo. Đối với các vấn đề phức tạp về khóa xe
                  máy, hãy luôn tham khảo ý kiến của chuyên gia hoặc dịch vụ sửa
                  khóa chuyên nghiệp.
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
                      Làm chìa khóa xe máy hết bao nhiêu tiền?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Giá làm chìa khóa xe máy dao động từ 50.000đ - 300.000đ
                      tùy loại xe. Xe số thường rẻ hơn xe tay ga. Xe đời mới có
                      khóa chíp cần lập trình sẽ đắt hơn. Nên mang theo chìa gốc
                      để được làm chính xác nhất.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Khóa xe bị kẹt phải làm sao?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Đầu tiên thử xịt dầu bôi trơn vào ổ khóa, để 5 phút sau đó
                      xoay nhẹ chìa khóa. Nếu không được, không nên dùng lực
                      mạnh sẽ gây gãy chìa. Trường hợp này nên gọi thợ khóa
                      chuyên nghiệp để xử lý, chi phí khoảng 100.000đ -
                      200.000đ.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Remote xe máy hết pin có làm được chìa cơ không?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Với xe có cả khóa cơ và remote, bạn vẫn có thể làm chìa cơ
                      bình thường khi remote hết pin. Tuy nhiên một số dòng xe
                      đời mới chỉ dùng remote thì cần thay pin hoặc sửa remote
                      trước. Nên kiểm tra sách hướng dẫn sử dụng xe để biết
                      chính xác.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Có nên lắp thêm khóa chống trộm cho xe máy?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Nếu xe của bạn có giá trị cao hoặc bạn thường xuyên để xe
                      ở nơi công cộng, việc lắp thêm khóa chống trộm là cần
                      thiết. Các loại khóa chống trộm tốt có giá từ 500.000đ -
                      2.000.000đ tùy tính năng. Nên chọn loại có uy tín và bảo
                      hành dài hạn.
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
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Khóa Két Sắt
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa khóa két sắt, mở khóa két sắt
                  </p>
                  <a
                    href="/sua-khoa-ket"
                    className="text-yellow-600 hover:text-yellow-800 font-medium"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Sửa Khóa Tủ
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa khóa tủ, làm chìa khóa tủ
                  </p>
                  <a
                    href="/sua-khoa-tu"
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
