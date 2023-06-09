import React from 'react';
import Star from '../../../components/Star';

import User07 from '../../../images/user-32-07.jpg';
import { useSession } from 'utils/SessionManager';

function DetailReview(props) {
  /* Router */

  /* State */
  const { session } = useSession();
  const { reviewInfo, star } = props;

  /* Hooks */

  /* Functions */

  /* Render */
  return (
    <li>
      <div className="flex items-center mb-2">
        <img
          className="w-8 h-8 rounded-full mr-3"
          src={`https://i.pravatar.cc/150?u=${session?.tenant_id}`}
          width="32"
          height="32"
          alt="img"
        />
        <div>
          <div className="text-sm font-semibold text-slate-800 mb-1">
            {reviewInfo.tenant.tenant_nm}
          </div>
          {/* Rating */}
          <Star star={star} />
        </div>
      </div>
      <div className="text-sm italic">{reviewInfo.review_content}</div>
    </li>
  );
}

export default DetailReview;
