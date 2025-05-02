import Image from "next/image";

export const metadata = {
  title: "Sửa Remote Cửa Cuốn Chuyên Nghiệp | An Toàn & Bảo Mật",
  description:
    "Dịch vụ sửa remote cửa cuốn chuyên nghiệp, uy tín. Sửa chữa, thay thế, lập trình remote cho mọi loại cửa cuốn, đảm bảo an toàn tuyệt đối.",
};

export default function SuaRemoteCuaCuonPage() {
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
            Sửa Remote Cửa Cuốn: Giải Pháp An Toàn Cho Ngôi Nhà Của Bạn
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Dịch vụ sửa remote cửa cuốn chuyên nghiệp, nhanh chóng, bảo mật. Sửa
            chữa, thay thế, lập trình remote cho mọi loại cửa cuốn, bảo vệ an
            ninh ngôi nhà bạn.
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
                  src="/images/cuacuon1.png"
                  alt="Các loại khóa ô tô"
                  fill
                  className="object-cover md:object-contain"
                  priority
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Remote cửa cuốn đóng vai trò quan trọng trong việc vận hành và
                bảo vệ ngôi nhà của bạn. Sự cố với remote có thể gây ra nhiều
                bất tiện và lo lắng. Chúng tôi cung cấp dịch vụ sửa remote cửa
                cuốn chuyên nghiệp, xử lý mọi vấn đề từ đơn giản đến phức tạp.
              </p>
              <p className="text-lg text-gray-700">
                Bài viết này sẽ cung cấp thông tin về các vấn đề thường gặp với
                remote cửa cuốn, cách nhận biết và khi nào cần đến sự hỗ trợ của
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
                    1. Các vấn đề thường gặp với remote cửa cuốn
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#troubleshooting"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    2. Dấu hiệu nhận biết remote gặp sự cố
                  </a>
                </li>
                <li className="border-b border-gray-200 pb-2">
                  <a
                    href="#expert-help"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    3. Khi nào cần gọi thợ sửa remote chuyên nghiệp
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    4. Dịch vụ sửa remote cửa cuốn của chúng tôi
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1: Common Issues */}
            <div id="common-issues" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                1. Các vấn đề thường gặp với remote cửa cuốn
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-900">
                Remote không điều khiển được cửa
              </h3>
              <p className="text-gray-700 mb-4">
                Đây là vấn đề phổ biến nhất với remote cửa cuốn. Nguyên nhân có
                thể do hết pin, remote bị hỏng mạch, lỗi mã tần số hoặc vấn đề
                với bộ thu tín hiệu trên cửa. Đôi khi do nhiễu sóng từ các thiết
                bị điện tử xung quanh.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Remote chỉ hoạt động ở khoảng cách gần
              </h3>
              <p className="text-gray-700 mb-4">
                Tình trạng này thường do pin yếu, ăng-ten thu tín hiệu trên cửa
                bị lỏng hoặc remote bị hỏng mạch phát tín hiệu. Đôi khi do vật
                cản hoặc nhiễu sóng từ môi trường xung quanh.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Nút bấm trên remote bị liệt
              </h3>
              <p className="text-gray-700 mb-4">
                Sau thời gian dài sử dụng, các nút bấm trên remote có thể bị
                liệt do mạch tiếp xúc bị oxy hóa hoặc do va đập làm hỏng mạch
                bên trong.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Remote bị mất mã tần số
              </h3>
              <p className="text-gray-700 mb-4">
                Đối với remote cửa cuốn, đôi khi xảy ra tình trạng mất đồng bộ
                mã tần số giữa remote và bộ điều khiển cửa. Nguyên nhân có thể
                do thay đổi tần số đột ngột hoặc lỗi hệ thống.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Remote bị nước vào hoặc va đập mạnh
              </h3>
              <p className="text-gray-700 mb-4">
                Remote bị ướt hoặc rơi vỡ có thể gây hỏng mạch điện bên trong,
                dẫn đến không hoạt động được. Đây là trường hợp cần kiểm tra và
                sửa chữa kỹ lưỡng.
              </p>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/cuacuon2.png"
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
                Xử lý khi remote không hoạt động
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Pin mới (CR2032 hoặc theo loại pin của remote)</li>
                  <li>Tua vít nhỏ</li>
                  <li>Cồn và bông tăm (để làm sạch mạch)</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Tháo vỏ remote theo hướng dẫn</li>
                  <li>Thay pin mới, đảm bảo đúng cực (+/-)</li>
                  <li>Kiểm tra và làm sạch các điểm tiếp xúc bằng cồn</li>
                  <li>Kiểm tra độ nguyên vẹn của mạch điện</li>
                  <li>Lắp lại và thử hoạt động</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Đồng bộ lại remote với cửa cuốn
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Lưu ý:</strong> Quy trình đồng bộ khác nhau tùy theo
                  loại cửa. Dưới đây là quy trình tổng quát:
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Tìm nút Learn trên bộ điều khiển cửa (thường màu đỏ)</li>
                  <li>Nhấn và giữ nút Learn trong 5 giây</li>
                  <li>Đèn trên bộ điều khiển sẽ nhấp nháy</li>
                  <li>Nhấn nút trên remote cần đồng bộ</li>
                  <li>Đợi đèn báo hiệu thành công</li>
                </ol>
                <p className="text-gray-700 mt-2">
                  <strong>Quan trọng:</strong> Nếu không chắc chắn, hãy tham
                  khảo sách hướng dẫn hoặc liên hệ chuyên gia.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Xử lý khi nút bấm bị liệt
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Vật liệu cần chuẩn bị:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  <li>Bút chì than (loại mềm)</li>
                  <li>Dầu tiếp điểm điện (nếu có)</li>
                  <li>Tua vít nhỏ</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  <strong>Các bước thực hiện:</strong>
                </p>
                <ol className="list-decimal pl-5 text-gray-700">
                  <li>Tháo vỏ remote</li>
                  <li>
                    Dùng bút chì than chà nhẹ lên điểm tiếp xúc của nút bấm
                  </li>
                  <li>Xịt một ít dầu tiếp điểm (nếu có)</li>
                  <li>Lắp lại và kiểm tra hoạt động</li>
                </ol>
              </div>

              <p className="text-gray-700 mt-6 italic">
                <strong>Lưu ý:</strong> Những hướng dẫn trên chỉ phù hợp với các
                vấn đề cơ bản. Với các tình huống phức tạp hơn như remote bị
                nước vào, hỏng mạch hoặc cần lập trình lại hệ thống, bạn nên tìm
                đến thợ sửa remote chuyên nghiệp.
              </p>
            </div>

            {/* Section 3: Maintenance */}
            <div id="maintenance" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                3. Cách bảo dưỡng remote cửa cuốn định kỳ
              </h2>

              <p className="text-gray-700 mb-4">
                Bảo dưỡng định kỳ giúp kéo dài tuổi thọ và đảm bảo hoạt động
                trơn tru của remote cửa cuốn. Dưới đây là lịch trình bảo dưỡng
                được khuyến nghị:
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
                        Kiểm tra pin remote, thay nếu điện yếu
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        6 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Làm sạch điểm tiếp xúc nút bấm bằng cồn
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        12 tháng
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Kiểm tra toàn diện tình trạng remote và bộ thu tín hiệu
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Khi cần
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        Đồng bộ lại remote với bộ điều khiển cửa
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mẹo bảo quản remote cửa cuốn:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Tránh để remote tiếp xúc với nước hoặc độ ẩm cao</li>
                <li>
                  Không để remote gần thiết bị điện tử mạnh có thể gây nhiễu
                </li>
                <li>Tránh va đập mạnh làm hỏng linh kiện bên trong</li>
                <li>Luôn có ít nhất 2 remote dự phòng</li>
                <li>Thay pin ngay khi thấy tín hiệu yếu</li>
                <li>Không treo quá nhiều phụ kiện nặng vào remote</li>
              </ul>

              <div className="min-h-[16rem] aspect-[3/2] w-full max-w-4xl mx-auto relative mb-6 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/cuacuon3.png"
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
                4. Khi nào nên gọi thợ sửa remote chuyên nghiệp
              </h2>

              <p className="text-gray-700 mb-4">
                Mặc dù có thể tự xử lý một số vấn đề đơn giản, nhưng nhiều
                trường hợp cần đến sự trợ giúp của thợ sửa remote chuyên nghiệp:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-red-700">
                    Tình huống khẩn cấp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Mất toàn bộ remote điều khiển cửa</li>
                    <li>Remote bị nước vào không hoạt động</li>
                    <li>Cửa không đóng/mở được gây mất an ninh</li>
                    <li>Remote bị hỏng hoàn toàn</li>
                    <li>Hệ thống cửa bị hỏng sau khi có dấu hiệu bị cạy phá</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-700">
                    Vấn đề phức tạp
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Cần làm lại hoàn toàn remote khi mất hết</li>
                    <li>Lập trình lại hệ thống điều khiển cửa</li>
                    <li>Thay thế bộ thu tín hiệu trên cửa</li>
                    <li>Sửa chữa mạch điện bên trong remote</li>
                    <li>Cài đặt thêm remote dự phòng</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Tiêu chí chọn thợ sửa remote uy tín:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Có chuyên môn và kinh nghiệm với loại cửa của bạn</li>
                <li>Sở hữu thiết bị chuyên dụng để lập trình remote</li>
                <li>Cung cấp bảo hành cho dịch vụ</li>
                <li>Có đánh giá tốt từ khách hàng trước đó</li>
                <li>Minh bạch về chi phí trước khi thực hiện</li>
                <li>Có dịch vụ hỗ trợ khẩn cấp 24/7</li>
              </ul>

              <div className="p-4 bg-yellow-50 rounded-lg mb-6">
                <p className="text-gray-700 mb-2">
                  <strong className="text-yellow-700">
                    Chi phí tham khảo:
                  </strong>{" "}
                  Giá dịch vụ sửa remote cửa cuốn dao động tùy theo loại cửa:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Thay pin remote: 50.000đ - 100.000đ</li>
                  <li>Sửa nút bấm remote: 100.000đ - 200.000đ</li>
                  <li>Làm remote mới đơn giản: 200.000đ - 500.000đ</li>
                  <li>Làm remote mã hóa cao cấp: 500.000đ - 1.500.000đ</li>
                  <li>
                    Lập trình lại hệ thống điều khiển: 300.000đ - 800.000đ
                  </li>
                </ul>
                <p className="text-gray-700 mt-2 italic">
                  Giá có thể cao hơn đối với cửa cuốn cao cấp hoặc những trường
                  hợp đặc biệt phức tạp.
                </p>
              </div>
            </div>

            {/* Section 5: Lock Types */}
            <div id="lock-types" className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                5. Các loại remote cửa cuốn phổ biến
              </h2>

              <p className="text-gray-700 mb-6">
                Hiểu rõ về loại remote của cửa giúp bạn có phương án bảo dưỡng
                và xử lý sự cố phù hợp:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-yellow-50 text-left text-gray-700">
                        Loại remote
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
                        Remote tần số cố định
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Tần số cố định không thay đổi</li>
                          <li>Dễ bị sao chép tín hiệu</li>
                          <li>Phổ biến trên cửa đời cũ</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Giá thành rẻ
                        <br />
                        <span className="text-green-600">+</span> Dễ thay thế
                        <br />
                        <span className="text-red-600">-</span> Bảo mật thấp
                        <br />
                        <span className="text-red-600">-</span> Dễ bị nhiễu sóng
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Remote mã hóa cố định
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Có mã hóa cố định</li>
                          <li>An toàn hơn loại tần số cố định</li>
                          <li>Phổ biến từ 2010-2015</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Bảo mật khá
                        <br />
                        <span className="text-green-600">+</span> Giá hợp lý
                        <br />
                        <span className="text-red-600">-</span> Vẫn có thể bị
                        sao chép
                        <br />
                        <span className="text-red-600">-</span> Khó làm lại khi
                        mất
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Remote mã hóa động
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Mã hóa thay đổi sau mỗi lần sử dụng</li>
                          <li>Không thể sao chép tín hiệu</li>
                          <li>Phổ biến từ 2015 đến nay</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Bảo mật cao
                        <br />
                        <span className="text-green-600">+</span> Chống trộm
                        hiệu quả
                        <br />
                        <span className="text-red-600">-</span> Giá thành cao
                        <br />
                        <span className="text-red-600">-</span> Cần chuyên gia
                        để lập trình
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-800">
                        Remote thông minh
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Kết nối qua Bluetooth/WiFi</li>
                          <li>Điều khiển từ xa qua smartphone</li>
                          <li>Phổ biến trên cửa cao cấp</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                        <span className="text-green-600">+</span> Tiện lợi cao
                        <br />
                        <span className="text-green-600">+</span> Bảo mật tốt
                        <br />
                        <span className="text-red-600">-</span> Chi phí đắt
                        <br />
                        <span className="text-red-600">-</span> Phụ thuộc vào
                        điện thoại
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Lời khuyên khi lựa chọn remote cửa cuốn:
              </h3>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>
                  Cửa đời cũ: Cân nhắc nâng cấp lên remote mã hóa động để tăng
                  bảo mật
                </li>
                <li>Luôn có ít nhất 2-3 remote dự phòng</li>
                <li>Chọn remote chính hãng phù hợp với loại cửa</li>
                <li>Đối với cửa quan trọng, nên chọn loại mã hóa động</li>
                <li>Lưu lại mã số remote để dễ dàng làm lại khi cần</li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-yellow-500 pb-2 text-gray-700 hover:text-yellow-600 transition-colors duration-300">
                Kết Luận
              </h2>

              <p className="text-gray-700 mb-4">
                Remote cửa cuốn ngày càng phát triển với công nghệ hiện đại,
                mang lại sự tiện lợi và an toàn cho ngôi nhà bạn. Tuy nhiên,
                càng hiện đại thì việc sửa chữa và thay thế càng trở nên phức
                tạp và tốn kém.
              </p>
              <p className="text-gray-700 mb-4">
                Việc hiểu rõ về loại remote của cửa, thực hiện bảo dưỡng định kỳ
                và biết cách xử lý các vấn đề cơ bản sẽ giúp bạn tiết kiệm thời
                gian, chi phí và tránh những tình huống khó xử. Đặc biệt, việc
                luôn có remote dự phòng là biện pháp đơn giản nhưng hiệu quả
                nhất.
              </p>
              <p className="text-gray-700 mb-4">
                Đối với những vấn đề phức tạp, đừng ngần ngại tìm đến sự trợ
                giúp của thợ sửa remote chuyên nghiệp để tránh làm hỏng thêm hệ
                thống điều khiển cửa.
              </p>

              <div className="p-4 bg-yellow-50 rounded-lg mt-6">
                <p className="text-gray-700 italic">
                  <strong>Lưu ý:</strong> Thông tin trong bài viết này chỉ mang
                  tính chất tham khảo. Đối với các vấn đề cụ thể về remote cửa
                  cuốn, hãy luôn tham khảo hướng dẫn sử dụng hoặc liên hệ với
                  chuyên gia để được tư vấn phù hợp.
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
                      Chi phí làm lại remote cửa cuốn khi mất hoàn toàn là bao
                      nhiêu?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Chi phí làm lại remote cửa cuốn khi mất hoàn toàn phụ
                      thuộc vào loại cửa và remote. Đối với remote tần số cố
                      định, chi phí khoảng 200.000đ - 500.000đ. Với remote mã
                      hóa động, chi phí từ 500.000đ - 1.500.000đ. Remote thông
                      minh có thể lên đến 2.000.000đ hoặc cao hơn. Bạn nên liên
                      hệ chuyên gia để được báo giá chính xác.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Làm thế nào khi remote chỉ hoạt động ở khoảng cách gần?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khi remote chỉ hoạt động ở khoảng cách gần, bạn có thể
                      thử: (1) Thay pin mới, (2) Kiểm tra ăng-ten thu tín hiệu
                      trên cửa có bị lỏng không, (3) Tránh các vật cản giữa
                      remote và cửa, (4) Kiểm tra xung quanh có thiết bị gây
                      nhiễu không. Nếu vẫn không cải thiện, có thể remote bị
                      hỏng mạch phát và cần sửa chữa.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Remote bị nước vào không hoạt động phải làm sao?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Khi remote bị nước vào, hãy: (1) Tháo pin ngay lập tức,
                      (2) Tháo vỏ remote và lau khô bằng khăn mềm, (3) Dùng máy
                      sấy tóc ở chế độ mát để hong khô (không dùng nhiệt cao),
                      (4) Để nơi khô ráo 24-48 giờ, (5) Lắp pin mới và thử lại.
                      Nếu vẫn không hoạt động, cần mang đến thợ sửa remote
                      chuyên nghiệp để kiểm tra mạch điện.
                    </p>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button className="flex justify-between items-center w-full p-4 text-left bg-yellow-50 hover:bg-yellow-100">
                    <span className="font-semibold text-gray-900">
                      Có nên nâng cấp remote cửa cuốn lên loại mã hóa động?
                    </span>
                    <span>+</span>
                  </button>
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <p className="text-gray-700">
                      Việc nâng cấp lên remote mã hóa động rất đáng cân nhắc vì:
                      (1) Tăng cường bảo mật, chống sao chép tín hiệu, (2) Giảm
                      nguy cơ bị đột nhập, (3) Phù hợp với cửa quan trọng. Tuy
                      nhiên, chi phí cao hơn và cần chuyên gia lắp đặt. Nếu cửa
                      của bạn chứa tài sản giá trị hoặc ở khu vực có nguy cơ
                      trộm cao, nên đầu tư nâng cấp.
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
                    Sửa Khóa Xe Máy
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dịch vụ sửa, làm chìa khóa xe máy các loại
                  </p>
                  <a
                    href="/khoa-xe-may"
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
