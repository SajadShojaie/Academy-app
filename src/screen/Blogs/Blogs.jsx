import React, { Component } from "react";
import TitleFirstLine from "../../components/TitleFirstLine/TitleFirstLine";
import BlogCol from "../../components/BlogCol/BlogCol";
import GetBlogData from "../../core/Services/api/BlogApi/GetBlogData";
import Paganation from "../../components/common/Paganation/Paganation";
import PaginateMetode from "../../components/common/Paganation/PaginateMetode";
import ControlHeader from "../../components/ControlHeader/ControlHeader";
import style from "./Blogs.module.css";
import BlogsSkeleton from "../../core/utils/Skeleton/BlogsSkeleton";
//tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Blogs extends Component {
  state = {
    data: [],
    isPending: true,
    pageSize: 8,
    curentPage: 1,
    smallshow: true,
    bigShowData: { right: "نوع خبر", middle: "تاریخ انتشار:", left: "سرفصل" },
  };

  //call api
  async componentDidMount() {
    const getterData = await GetBlogData();
    this.setState({ data: getterData });
    setTimeout(() => {
      this.setState({ isPending: false });
    }, 2000);
  }

  render() {
    const { data, isPending, pageSize, curentPage, smallshow, bigShowData } =
      this.state;

    const handelChanger = (page) => {
      this.setState({ curentPage: page });
    };

    const handelLeft = () => {
      if (curentPage > 1) {
        this.setState({
          curentPage: curentPage - 1,
        });
      }
    };

    const handelRight = () => {
      const pageCount = Math.ceil(data.length / pageSize);

      if (curentPage < pageCount) {
        this.setState({ curentPage: curentPage + 1 });
      }
    };

    const handelPageSize = (value) => {
      this.setState({ pageSize: value.target.value });
      this.setState({ curentPage: 1 });
    };

    const handelchangerRight = () => {
      this.setState({ smallshow: true });
    };

    const handelchangerLeft = () => {
      this.setState({ smallshow: false });
    };

    const allBlogsWithFilter = PaginateMetode(data, curentPage, pageSize);

    return (
      <div className={`mt-4 ${style.cover}`}>
        <ToastContainer bodyClassName={style.fontTost} />

        <TitleFirstLine
          text='بلاگ '
          width='200px'
          isDarkMode={this.props.isDarkMode}
        />
        <div
          className={`container d-flex justify-content-around flex-wrap mt-4 ${style.holder_blogcol}`}
        >
          <ControlHeader
            kindtext='بلاگ ها'
            handelchangerRight={handelchangerRight}
            handelchangerLeft={handelchangerLeft}
            handelPageSize={handelPageSize}
            pageSize={pageSize}
            smallshow={smallshow}
            isDarkMode={this.props.isDarkMode}
          />
          {isPending ? (
            // <div className='fs-4 fw-bold text-center mt-4'>Loading...</div>

            <BlogsSkeleton />
          ) : (
            <>
              {allBlogsWithFilter.map((data) => (
                <BlogCol
                  key={data._id}
                  data={data}
                  image={data.image}
                  title={data.title}
                  des={data.text}
                  bigShowData={bigShowData}
                  folder='blog'
                  detailPage='BlogsDetails'
                  smallshow={smallshow}
                  isDarkMode={this.props.isDarkMode}
                />
              ))}

              <div className={`mt-5 ${style.paganation}`}>
                <Paganation
                  pageSize={pageSize}
                  totalData={data.length}
                  curentPage={curentPage}
                  handelChanger={handelChanger}
                  handelLeft={handelLeft}
                  handelRight={handelRight}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Blogs;
