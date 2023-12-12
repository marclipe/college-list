import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SetBreadcrumbsAction } from "../../redux/breadcrumb/action";
import { RootState } from "../../redux/root-reducer";
import { ArrowCircleRight } from "@phosphor-icons/react";

interface BreadcrumbProps {
  segment: string;
  path: string;
  destination: string
}

export const Breadcrumbs = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const breadcrumbs = useSelector((state: RootState) =>
    state.breadcrumbs.map((path) => ({
      segment: path,
      path,
      destination: ""
    }))
  ) as BreadcrumbProps[];

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter((segment) => segment !== "");

    const newBreadcrumbs: BreadcrumbProps[] = pathSegments.map((segment, index) => {
      const path = `${pathSegments.slice(0, index + 1).join("/")}`;
      const destination = pathSegments[index];
      return { segment, path, destination };
    });

    //convert to strings
    const stringBreadcrumbs = newBreadcrumbs.map(
      (breadcrumb) => breadcrumb.path
    );
    
    dispatch(SetBreadcrumbsAction(stringBreadcrumbs));
  }, [location.pathname, dispatch]);

  const handleBreadcrumbClick = (path: string) => {
    navigate(path);
  };

  //not work in home
  const isHome = location.pathname === "/";
  const containerClass = isHome ? "" : "container-breadcrumbs";

  return (
    <div className={containerClass}>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          {index > 0 && "/"}
          <div className="@apply flex items-center gap-1">
            <Link to="" onClick={() => handleBreadcrumbClick(breadcrumb.path)}>
              <p className="text-[white] font-semibold">
                {index === 0 ? "home" : breadcrumb.segment}
              </p>
            </Link>
            <p>
              <ArrowCircleRight size={20} weight="fill" />
            </p>
            {breadcrumb.segment}
          </div>
        </span>
      ))}
    </div>
  );  
}